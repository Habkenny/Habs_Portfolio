type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  headingId?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
