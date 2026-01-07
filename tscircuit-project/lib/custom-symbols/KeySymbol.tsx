// Custom schematic symbol for a keyboard key switch
// Shows a simple pushbutton-style symbol

export const KeySymbol = () => {
  return (
    <symbol>
      {/* Switch symbol - two contacts with a gap */}
      <schematicline x1={-0.8} y1={0} x2={-0.3} y2={0} />
      <schematicline x1={0.3} y1={0} x2={0.8} y2={0} />

      {/* Moving contact (angled line) */}
      <schematicline x1={-0.3} y1={0} x2={0.3} y2={0.4} />

      {/* Small circle at pivot point */}
      <schematiccircle center={{ x: -0.3, y: 0 }} radius={0.08} isFilled={true} />

      {/* Pin ports */}
      <port name="pin1" direction="left" schX={-0.8} schY={0} />
      <port name="pin2" direction="right" schX={0.8} schY={0} />
    </symbol>
  )
}
