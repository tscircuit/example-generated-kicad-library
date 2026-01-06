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
│  ├─ custom-symbols/
│  │  ├─ index.tsx
│  │  ├─ SpacebarSymbol.tsx
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

// Symbols may not be used in chips, but should still be included in the
// output library if exported here
export { SpacebarSymbol } from "lib/custom-symbols/SpacebarSymbol"

// This should also work- you must evaluate this file to find all the exports
export * from "lib/custom-symbols"

export const notExportedToKicad = "some string"
export type notExportedToKicadType = number
export const notExportedToKicadFn = () => 10
```

```js
// tscircuit.config.json
{
  "kicadFootprintLibraryEntrypoint": "./lib/my-footprint-library.ts",
  "kicadFootprintLibraryOutputDirPath" : "./kicad-lib"
}
```

> Implementation Note 1: Symbols should not be "duplicated"- if two chips use the same symbol, reuse that
> symbol. Symbol names should therefore NOT inherit the name of the component UNLESS they are custom. e.g.
>
> If you have `export const MyComponent = () => <chip footprint="soic8" />`, the symbol name will be `soic8`.
>
> If you have `export const MyComponent = () => <chip symbol={<symbol>...</symbol>} />` the symbol name will be `MyComponent`.
>
> If you have `export const MyComponent = () => <chip symbol={<symbol name="MySymbol">...</symbol>} />` the symbol name will be `MySymbol`

> Implementation Note 2: kicad-lib should be marked as ignored inside `.gitignore` for most users, we won't
> do this automatically because some users may commit artifacts, but we may ask during `tsci init` if the
> user is explicitly creating a kicad library

#### Output

What does the resulting kicad project look like? Directory-structure wise?
```text
├─ fp_lib_table
├─ sym_lib_table
├─ symbols/
│  ├─ tscircuit_builtin.kicad_sym
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
│  ├─ tscircuit_builtin.3dshapes
│  └─ my-library.3dshapes/
│     ├─ Spacebar.step
│     ├─ NormalKey.step
│     └─ KeyHotSwapSwitch.step
```

> builtins _maybe_ should be configurable, definitely dont generate if unused

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

## User Story

### Making a Library

I want just a library, I don't need a kicad_pro file etc. It's not a kicad project, it's a library. No extra things.

### Making a library FOR a project

I want a kicad project, but to make it properly it should also have a `footprints` directory and all the stuff generated
by a library

## References

- https://github.com/espressif/kicad-libraries/tree/main
- https://github.com/CDFER/JLCPCB-Kicad-Library/tree/main
- https://github.com/kiswitch/kiswitch/tree/main
- https://github.com/openinput-fw/openinput-kicad-library
- https://gitlab.com/kicad/code/kicad/-/tree/master/demos/tiny_tapeout/tinytapeout-kicad-libs?ref_type=heads
- https://gitlab.com/kicad/code/kicad/-/tree/master/demos/cm5_minima?ref_type=heads
