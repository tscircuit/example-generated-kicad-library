// Script to compute keyboard dimensions for PCB layout
import { computeBoundsOfKeyboard } from "../lib/utils/compute-bounds-of-keyboard"
import { KEY_SPACING, SPACEBAR_WIDTH_UNITS } from "../lib/src/global"

const bounds = computeBoundsOfKeyboard(5, 15)

console.log("Keyboard Dimensions:")
console.log(`  Width: ${bounds.width}mm`)
console.log(`  Height: ${bounds.height}mm`)
console.log(`  Center: (${bounds.centerX}, ${bounds.centerY})`)
console.log(`  Spacebar width: ${SPACEBAR_WIDTH_UNITS * KEY_SPACING}mm`)
