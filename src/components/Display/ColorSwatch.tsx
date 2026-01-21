export interface ColorSwatchProps {
  name: string
  hex: string
  rgb?: string
  usage: string
  gradient?: string
}

export function ColorSwatch({
  name,
  hex,
  rgb,
  usage,
  gradient,
}: ColorSwatchProps) {
  const style = gradient ? { background: gradient } : { backgroundColor: hex }

  return (
    <div className="bien-color-swatch">
      <div className="bien-color-swatch__preview" style={style} />
      <div className="bien-color-swatch__info">
        <div className="bien-color-swatch__name">{name}</div>
        <div className="bien-color-swatch__value">{hex}</div>
        {rgb && <div className="bien-color-swatch__rgb">{rgb}</div>}
        <div className="bien-color-swatch__usage">{usage}</div>
      </div>
    </div>
  )
}
