import { KeyHotSocket } from "./KeyHotSocket"
import { KeyShaftForHotSocket } from "./KeyShaftForHotSocket"

export const NormalKey = (props: {
  pcbX?: number
  pcbY?: number
  schX?: number
  schY?: number
  name: string
  connections?: {
    pin1?: string
    pin2?: string
  }
}) => {
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
