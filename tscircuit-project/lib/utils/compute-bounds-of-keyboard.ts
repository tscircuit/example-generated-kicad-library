import { KEY_SPACING, KEYBOARD_ROWS, KEYBOARD_COLS } from "../src/global"

export interface KeyboardBounds {
  width: number
  height: number
  centerX: number
  centerY: number
}

export function computeBoundsOfKeyboard(
  rows: number = KEYBOARD_ROWS,
  cols: number = KEYBOARD_COLS,
): KeyboardBounds {
  const width = cols * KEY_SPACING
  const height = rows * KEY_SPACING

  return {
    width,
    height,
    centerX: width / 2,
    centerY: height / 2,
  }
}
