import { NormalKey } from "./lib/components/NormalKey"
import { SpacebarKey } from "./lib/components/SpacebarKey"
import { KEY_SPACING } from "./lib/src/global"
import { computeBoundsOfKeyboard } from "./lib/utils/compute-bounds-of-keyboard"

const bounds = computeBoundsOfKeyboard(4, 10)

export default () => (
  <board width={`${bounds.width + 20}mm`} height={`${bounds.height + 40}mm`}>
    {/* Top row - 10 keys */}
    {Array.from({ length: 10 }).map((_, i) => (
      <NormalKey
        key={`row1_${i}`}
        name={`K1_${i + 1}`}
        pcbX={i * KEY_SPACING - bounds.centerX + KEY_SPACING / 2}
        pcbY={bounds.centerY - KEY_SPACING / 2}
        schX={i * 2}
        schY={9}
      />
    ))}

    {/* Second row - 10 keys */}
    {Array.from({ length: 10 }).map((_, i) => (
      <NormalKey
        key={`row2_${i}`}
        name={`K2_${i + 1}`}
        pcbX={i * KEY_SPACING - bounds.centerX + KEY_SPACING / 2}
        pcbY={bounds.centerY - KEY_SPACING * 1.5}
        schX={i * 2}
        schY={6}
      />
    ))}

    {/* Third row - 10 keys */}
    {Array.from({ length: 10 }).map((_, i) => (
      <NormalKey
        key={`row3_${i}`}
        name={`K3_${i + 1}`}
        pcbX={i * KEY_SPACING - bounds.centerX + KEY_SPACING / 2}
        pcbY={bounds.centerY - KEY_SPACING * 2.5}
        schX={i * 2}
        schY={3}
      />
    ))}

    {/* Bottom row - spacebar */}
    <SpacebarKey
      name="SPACE"
      pcbX={0}
      pcbY={bounds.centerY - KEY_SPACING * 3.5}
      schX={10}
      schY={0}
    />
  </board>
)
