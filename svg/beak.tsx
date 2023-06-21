export default function Beak({
  width="100",
  height="100",
  className
}: {
  width?: string
  height?: string
  className?: string
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 575.81 766.28" className={className}>
      <polygon fill="#ce6500" points="287.91 0 0 184.33 287.91 337.91 287.91 0"/>
      <polygon fill="#80420c" points="0 184.33 287.91 766.28 287.91 337.91 0 184.33"/>
      <polygon fill="#d8884e" points="287.91 337.91 575.81 184.33 287.91 0 287.91 337.91"/>
      <polygon fill="#d07a04" points="287.91 766.28 575.81 184.33 287.91 337.91 287.91 766.28"/>
    </svg>
  )
}
