// This is the kicad library entrypoint
export { KeyHotSocket } from "./components/KeyHotSocket"
export { KeyShaftForHotSocket } from "./components/KeyShaftForHotSocket"
export { NormalKey } from "./components/NormalKey"
export { SpacebarKey } from "./components/SpacebarKey"

// Symbols may not be used in chips, but should still be included in the
// output library if exported here
export { SpacebarSymbol } from "./custom-symbols/SpacebarSymbol"
export { KeySymbol } from './custom-symbols/KeySymbol';


// This should also work - you must evaluate this file to find all the exports
export * from "./custom-symbols"

// These should NOT be exported to KiCad (not components - lowercase/non-component)
// export const notExportedToKicad = "some string"
// export type NotExportedToKicadType = number
// export const notExportedToKicadFn = () => 10
