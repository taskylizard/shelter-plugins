const {
  observeDom,
  flux: { dispatcher },
  ui: { injectCss },
} = shelter;

import styles from "./styles.scss";

const zoomSize = 100; // px
let zoomLevel = 1;

const MAX_ZOOM = 5;
const MIN_ZOOM = 1;

function magnify(container: Element) {
  const img = container.querySelector("img") as HTMLImageElement;
  if (!img) return;

  let zoom: HTMLDivElement | null = null;
  let zoomImg: HTMLImageElement | null = null;

  const createZoom = () => {
    zoom = document.createElement("div");
    zoom.className = "zoom-lens";
    zoom.style.width = `${zoomSize}px`;
    zoom.style.height = `${zoomSize}px`;

    zoomImg = img.cloneNode(true) as HTMLImageElement;

    zoom.appendChild(zoomImg);

    container.appendChild(zoom);
    zoom.classList.add("show");
  };

  const removeZoom = () => {
    zoom?.classList.remove("show");
    setTimeout(() => {
      zoom?.remove();
      zoom = null;
      zoomImg = null;
      zoomLevel = 1;
    }, 250);
  };

  const handleMouseMove = (ev: MouseEvent) => {
    if (!zoom || !zoomImg) return;
    ev.preventDefault();
    ev.stopPropagation();

    const rect = container.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    zoom.style.left = `${x - zoom.offsetWidth / 2}px`;
    zoom.style.top = `${y - zoom.offsetHeight / 2}px`;

    const percX = x / rect.width;
    const percY = y / rect.height;

    const zoomLeft = -percX * zoomImg.offsetWidth + zoom.offsetWidth / 2;
    const zoomTop = -percY * zoomImg.offsetHeight + zoom.offsetHeight / 2;

    zoomImg.style.left = `${zoomLeft}px`;
    zoomImg.style.top = `${zoomTop}px`;
  };

  const handleWheel = (ev: WheelEvent) => {
    if (!zoom) return;
    ev.preventDefault();

    zoomLevel += ev.deltaY > 0 ? -1 : 1;
    zoomLevel = Math.min(Math.max(zoomLevel, MIN_ZOOM), MAX_ZOOM);

    zoom.style.transform = `scale(${zoomLevel})`;
  };

  const handleMouseDown = (ev: MouseEvent) => {
    if (ev.button !== 0) return; // Only respond to left mouse button, I don't think this is needed
    createZoom();
  };

  img.addEventListener("mousedown", handleMouseDown);
  img.addEventListener("mouseup", removeZoom);
  img.addEventListener("mouseleave", removeZoom);
  img.addEventListener("mousemove", handleMouseMove);
  img.addEventListener("wheel", handleWheel);
}

function handleDispatch(_dispatch) {
  const unobs = observeDom('[class^="loadingOverlay_"]', (elm) => {
    magnify(elm);
    unobs();
  });

  setTimeout(unobs, 250);
}

dispatcher.subscribe("UPDATE_CHANNEL_DIMENSIONS", handleDispatch);

const uncss = injectCss(styles);

export const onUnload = () => [
  uncss(),
  dispatcher.unsubscribe("UPDATE_CHANNEL_DIMENSIONS", handleDispatch),
];

// TODO: Add a settings page