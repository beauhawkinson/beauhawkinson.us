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
      <h2 className="font-medium text-foreground text-xl">{title}</h2>
      {subtitle && <p className="mt-1 text-faded-foreground text-sm">{subtitle}</p>}
    </div>
    {action}
  </div>
);

export default SectionHeading;
