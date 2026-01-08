// Custom schematic symbol for the spacebar key
// This shows how to create a reusable symbol component

export const SpacebarSymbol = () => {
  return (
    <symbol>
      {/* Main box outline */}
      <schematicrect schX={0} schY={0} width={3} height={1} isFilled={false} />

      {/* Spacebar label */}
      <schematictext schX={0} schY={0} text="SPACE" />

      {/* Pin ports */}
      <port name="pin1" direction="left" schX={-1.5} schY={0} />
      <port name="pin2" direction="right" schX={1.5} schY={0} />
    </symbol>
  )
}

// Example usage in a chip:
// <chip name="SW1" symbol={<SpacebarSymbol />} footprint="..." />
