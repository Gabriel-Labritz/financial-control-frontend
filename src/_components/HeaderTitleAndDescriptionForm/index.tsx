interface HeaderTitleAndDescriptionFormProps {
  headerTitle: string;
  headerDescription?: string;
}

export default function HeaderTitleAndDescriptionForm({
  headerTitle,
  headerDescription,
}: HeaderTitleAndDescriptionFormProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl xl:text-3xl font-semibold text-primary tracking-tight">
        {headerTitle}
      </h2>
      {headerDescription && (
        <p className="text-sm text-muted-foreground">{headerDescription}</p>
      )}
    </div>
  );
}
