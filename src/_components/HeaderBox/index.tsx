interface HeaderBoxProps {
  type?: "greeting" | "title";
  title: string;
  user?: string;
  subtext: string;
}
export default function HeaderBox({
  type,
  title,
  user,
  subtext,
}: HeaderBoxProps) {
  return (
    <div className="flex flex-col gap-1 w-full lg:w-lg">
      <h1 className="text-2xl xl:text-3xl font-medium tracking-tight text-foreground">
        {title}
        {type === "greeting" && (
          <span className="text-primary">&nbsp;{user}</span>
        )}
      </h1>
      <p className="text-sm text-muted-foreground">{subtext}</p>
    </div>
  );
}
