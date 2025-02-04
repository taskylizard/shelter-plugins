import type { Component, ComponentProps } from "solid-js"
import { mergeProps, splitProps } from "solid-js"
 
type JustifyContent = "start" | "end" | "center" | "between" | "around" | "evenly"
type AlignItems = "start" | "end" | "center" | "baseline" | "stretch"
type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse"
 
type FlexProps = ComponentProps<"div"> & {
  flexDirection?: FlexDirection
  justifyContent?: JustifyContent
  alignItems?: AlignItems
}

const styles = {
  base: {
    display: "flex",
    width: "100%"
  },
  justifyContent: {
    start: { justifyContent: "flex-start" },
    end: { justifyContent: "flex-end" },
    center: { justifyContent: "center" },
    between: { justifyContent: "space-between" },
    around: { justifyContent: "space-around" },
    evenly: { justifyContent: "space-evenly" }
  },
  alignItems: {
    start: { alignItems: "flex-start" },
    end: { alignItems: "flex-end" },
    center: { alignItems: "center" },
    baseline: { alignItems: "baseline" },
    stretch: { alignItems: "stretch" }
  },
  flexDirection: {
    row: { flexDirection: "row" },
    col: { flexDirection: "column" },
    "row-reverse": { flexDirection: "row-reverse" },
    "col-reverse": { flexDirection: "column-reverse" }
  }
} as const
 
const Flex: Component<FlexProps> = (rawProps) => {
  const props = mergeProps(
    {
      flexDirection: "row",
      justifyContent: "between",
      alignItems: "center"
    } satisfies FlexProps,
    rawProps
  )
  const [local, others] = splitProps(props, [
    "flexDirection",
    "justifyContent",
    "alignItems",
    "class"
  ])
 
  return (
    <div
      style={{
        ...styles.base,
        ...styles.flexDirection[local.flexDirection],
        ...styles.justifyContent[local.justifyContent],
        ...styles.alignItems[local.alignItems]
      }}
      class={local.class}
      {...others}
    />
  )
}
 
export { Flex }