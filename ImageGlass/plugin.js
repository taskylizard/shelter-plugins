(function(exports) {

"use strict";

//#region plugins/ImageGlass/styles.scss
var styles_default = `.zoom-lens {
  pointer-events: none;
  opacity: 0;
  transform-origin: 50%;
  filter: drop-shadow(0 0 2px gray);
  background: #fff;
  border: 2px solid gray;
  border-radius: 50%;
  width: 14rem;
  height: 14rem;
  transition: transform .25s, opacity 0s linear .25s;
  position: absolute;
  overflow: hidden;
  transform: scale(0);
  box-shadow: inset 0 0 10px 2px gray;
}

.zoom-lens.show {
  opacity: 1;
  transition: transform .25s, opacity linear;
  transform: scale(1);
}

.zoom-lens img {
  transition: opacity .25s;
  position: absolute;
  top: 0;
  left: 0;
}
`;

//#endregion
//#region plugins/ImageGlass/index.tsx
const { observeDom, flux: { dispatcher }, ui: { injectCss } } = shelter;
const zoomSize = 100;
let zoomLevel = 1;
const MAX_ZOOM = 5;
const MIN_ZOOM = 1;
function magnify(container) {
	const img = container.querySelector("img");
	if (!img) return;
	let zoom = null;
	let zoomImg = null;
	const createZoom = () => {
		zoom = document.createElement("div");
		zoom.className = "zoom-lens";
		zoom.style.width = `${zoomSize}px`;
		zoom.style.height = `${zoomSize}px`;
		zoomImg = img.cloneNode(true);
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
	const handleMouseMove = (ev) => {
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
	const handleWheel = (ev) => {
		if (!zoom) return;
		ev.preventDefault();
		zoomLevel += ev.deltaY > 0 ? -1 : 1;
		zoomLevel = Math.min(Math.max(zoomLevel, MIN_ZOOM), MAX_ZOOM);
		zoom.style.transform = `scale(${zoomLevel})`;
	};
	const handleMouseDown = (ev) => {
		if (ev.button !== 0) return;
		createZoom();
	};
	img.addEventListener("mousedown", handleMouseDown);
	img.addEventListener("mouseup", removeZoom);
	img.addEventListener("mouseleave", removeZoom);
	img.addEventListener("mousemove", handleMouseMove);
	img.addEventListener("wheel", handleWheel);
}
function handleDispatch(_dispatch) {
	const unobs = observeDom("[class^=\"loadingOverlay_\"]", (elm) => {
		magnify(elm);
		unobs();
	});
	setTimeout(unobs, 250);
}
dispatcher.subscribe("UPDATE_CHANNEL_DIMENSIONS", handleDispatch);
const uncss = injectCss(styles_default);
const onUnload = () => [uncss(), dispatcher.unsubscribe("UPDATE_CHANNEL_DIMENSIONS", handleDispatch)];

//#endregion
exports.onUnload = onUnload
return exports;
})({});