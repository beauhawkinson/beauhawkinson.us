const SectionHeading = ({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) => (
  <div className="mb-6 flex items-end justify-between gap-4">
    <div>
      <h2 className="font-semibold text-base text-foreground">{title}</h2>
      {subtitle && <p className="mt-1 text-muted-foreground text-xs">{subtitle}</p>}
    </div>
    {action}
  </div>
);

export default SectionHeading;
