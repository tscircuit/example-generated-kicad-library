# example-generated-kicad-library

- Directory with tscircuit project
- Directory with kicad project, automatically generated
- ./generate.sh

## Illustrative tscircuit project structure


### Project 1 (Example Keyboard Project)

#### Input

- package.json
- lib/index.ts
- lib/src/global.ts
- lib/my-footprint-library.ts
- lib/3D_Models/KeyHotSwapSwitch.glb
- lib/3D_Models/KeyHotSwapSwitch.step
- lib/3D_Models/Spacebar.glb
- lib/3D_Models/Spacebar.step
- lib/3D_Models/Key.glb
- lib/3D_Models/Key.step
- lib/components/KeyHotSwapSwitch.tsx
- lib/components/NormalKey.tsx
- lib/components/SpacebarKey.tsx
- lib/components/AnyKey.tsx
- lib/utils/compute-bounds-of-keyboard.ts
- scripts/compute-keyboard-dimensions.ts
- tscircuit.config.json
- tsconfig.json
- FullKeyboard.tsx

```tsx
// lib/my-footprint-library.ts

export { KeyHotSwapSwitch } from "lib/components/KeyHotSwapSwitch"
export { SpacebarKey } from "lib/components/SpacebarKey"
export { NormalKey } from "lib/components/NormalKey"
```

#### Output

What does the resulting kicad project look like? Directory-structure wise?

- `fp_lib_table`
- `sym_lib_table`
- `symbols`
-   `tscircuit.sym`
-   `my-library.sym`
- `footprints`
-   `tscircuit_builtin.pretty`
-     `0402.kicad_mod`
-     `soic8_w3.kicad_mod`
-   `my-library.pretty`
-      `SpacebarKey.kicad_mod`
-      `NormalKey.kicad_mod`

## Project 2


## circuit-json-to-kicad


```tsx
import { KicadLibraryConverter } from "circuit-json-to-kicad"

// What the code looks like in the CLI
const convert = new KicadLibraryConverter({
  filePaths: ["lib/index.ts", "lib/components/SpacebarKey.tsx"],
  buildFilePath: async (filePath: string) => {
    return await generateCircuitJson(filePath)
  }
})

convert.getOutput() // { kicadProjectFsMap: Record<FilePath, FileContent | Buffer> }
```

## References

- https://github.com/espressif/kicad-libraries/tree/main
- https://github.com/CDFER/JLCPCB-Kicad-Library/tree/main
- https://github.com/kiswitch/kiswitch/tree/main
- https://github.com/openinput-fw/openinput-kicad-library
- https://gitlab.com/kicad/code/kicad/-/tree/master/demos/tiny_tapeout/tinytapeout-kicad-libs?ref_type=heads
- https://gitlab.com/kicad/code/kicad/-/tree/master/demos/cm5_minima?ref_type=heads
