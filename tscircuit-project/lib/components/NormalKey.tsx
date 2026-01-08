import type { ChipProps } from "@tscircuit/props"
import { KeyHotSocket } from "./KeyHotSocket"
import { KeyShaftForHotSocket } from "./KeyShaftForHotSocket"

export const NormalKey = (props: ChipProps<"pin1" | "pin2">) => {
  return (
    <group
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      schX={props.schX}
      schY={props.schY}
    >
      <KeyHotSocket name={props.name} connections={props.connections} />
      <KeyShaftForHotSocket
        name={`${props.name}_shaft`}
        pcbX={0}
        pcbY={-0.52}
      />
      <footprint>
        <silkscreentext text={props.name} pcbY={5} fontSize="1mm" />
      </footprint>
    </group>
  )
}
