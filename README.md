# example-generated-kicad-library

- Directory with tscircuit project
- Directory with kicad project, automatically generated
- ./generate.sh

## Illustrative tscircuit project structure


### Project 1 (Example Keyboard Project)

#### Input

```
├─ package.json
├─ tsconfig.json
├─ tscircuit.config.json
├─ FullKeyboard.tsx
├─ lib/
│  ├─ index.ts
│  ├─ src/
│  │  └─ global.ts
│  ├─ my-footprint-library.ts
│  ├─ components/
│  │  ├─ KeyHotSwapSwitch.tsx
│  │  ├─ NormalKey.tsx
│  │  ├─ SpacebarKey.tsx
│  │  └─ AnyKey.tsx
│  ├─ utils/
│  │  └─ compute-bounds-of-keyboard.ts
│  ├─ 3D_Models/
│  │  ├─ KeyHotSwapSwitch.glb
│  │  ├─ KeyHotSwapSwitch.step
│  │  ├─ NormalKey.glb
│  │  ├─ NormalKey.step
│  │  ├─ Spacebar.glb
│  │  └─ Spacebar.step
├─ scripts/
│  └─ compute-keyboard-dimensions.ts
```

```tsx
// lib/my-footprint-library.ts
export { KeyHotSwapSwitch } from "lib/components/KeyHotSwapSwitch"
export { SpacebarKey } from "lib/components/SpacebarKey"
export { NormalKey } from "lib/components/NormalKey"

export const notExportedToKicad = "some string"
export type notExportedToKicadType = number
export const notExportedToKicadFn = () => 10
```

```js
// tscircuit.config.json
{
  "kicadFootprintLibraryEntrypoint": "./lib/my-footprint-library.ts"
}
```

#### Output

What does the resulting kicad project look like? Directory-structure wise?
```text
├─ fp_lib_table
├─ sym_lib_table
├─ symbols/
│  ├─ tscircuit.kicad_sym
│  └─ my-library.kicad_sym
├─ footprints/
│  ├─ tscircuit_builtin.pretty/
│  │  ├─ 0402.kicad_mod
│  │  └─ soic8_w3.kicad_mod
│  └─ my-library.pretty/
│     ├─ SpacebarKey.kicad_mod
│     ├─ NormalKey.kicad_mod
│     └─ KeyHotSwapSwitch.kicad_mod
├─ 3dmodels/
│  └─ my-library.3dshapes/
│     ├─ Spacebar.step
│     ├─ NormalKey.step
│     └─ KeyHotSwapSwitch.step
```

## Project 2
Reserved for additional example

## circuit-json-to-kicad: Library Conversion API
Example Usage (CLI-side)

```tsx
import { KicadLibraryConverter } from "circuit-json-to-kicad"
import { generateCircuitJson } from "lib/shared/generate-circuit-json"

const convert = new KicadLibraryConverter({
  filePaths: [
    "lib/index.ts",
    "lib/components/SpacebarKey.tsx",
  ],
  buildFilePath: async (filePath: string) => {
    return await generateCircuitJson(filePath)
  },
})

const output = convert.getOutput()
// {
//   kicadProjectFsMap: Record<FilePath, FileContent | Buffer>
// }

```

## References

- https://github.com/espressif/kicad-libraries/tree/main
- https://github.com/CDFER/JLCPCB-Kicad-Library/tree/main
- https://github.com/kiswitch/kiswitch/tree/main
- https://github.com/openinput-fw/openinput-kicad-library
- https://gitlab.com/kicad/code/kicad/-/tree/master/demos/tiny_tapeout/tinytapeout-kicad-libs?ref_type=heads
- https://gitlab.com/kicad/code/kicad/-/tree/master/demos/cm5_minima?ref_type=heads
