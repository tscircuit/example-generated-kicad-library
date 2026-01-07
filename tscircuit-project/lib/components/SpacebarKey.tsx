import { KeyHotSocket } from "./KeyHotSocket"
import { KeyShaftForHotSocket } from "./KeyShaftForHotSocket"

export const SpacebarKey = (props: {
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
  // Spacebar is wider - uses multiple stabilizer points
  return (
    <group
      pcbX={props.pcbX}
      pcbY={props.pcbY}
      schX={props.schX}
      schY={props.schY}
    >
      {/* Main switch in center */}
      <KeyHotSocket name={props.name} connections={props.connections} />
      <KeyShaftForHotSocket
        name={`${props.name}_shaft`}
        pcbX={0}
        pcbY={-0.52}
      />
      {/* Stabilizer holes on left and right */}
      <footprint>
        <hole pcbX={-50} pcbY={0} diameter="3mm" />
        <hole pcbX={50} pcbY={0} diameter="3mm" />
        <silkscreentext text="SPACEBAR" pcbY={8} fontSize="1.5mm" />
      </footprint>
    </group>
  )
}
