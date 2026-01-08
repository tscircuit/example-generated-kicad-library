import type { ChipProps } from "@tscircuit/props"
import { KeyHotSocket } from "./KeyHotSocket"
import { KeyShaftForHotSocket } from "./KeyShaftForHotSocket"

export const AnyKey = (
  props: ChipProps<"pin1" | "pin2"> & {
    keyWidth?: number // Width in key units (1 = standard key, 2 = 2u key, etc.)
    label?: string
  },
) => {
  const keyWidth = props.keyWidth ?? 1

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
        {/* Stabilizer holes for keys wider than 2u */}
        {keyWidth >= 2 && (
          <>
            <hole pcbX={-11.9} pcbY={0} diameter="3mm" />
            <hole pcbX={11.9} pcbY={0} diameter="3mm" />
          </>
        )}
        {/* Additional stabilizers for very wide keys like spacebar (6.25u+) */}
        {keyWidth >= 6 && (
          <>
            <hole pcbX={-50} pcbY={0} diameter="3mm" />
            <hole pcbX={50} pcbY={0} diameter="3mm" />
          </>
        )}
        <silkscreentext
          text={props.label ?? props.name}
          pcbY={5}
          fontSize="1mm"
        />
      </footprint>
    </group>
  )
}
