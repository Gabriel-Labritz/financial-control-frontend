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
    <div className="flex flex-col gap-1 mt-5">
      <h1 className="text-2xl lg:text-3xl font-semibold tracking-tighter text-foreground">
        {title}
        {type === "greeting" && (
          <span className="text-primary">&nbsp;{user}</span>
        )}
      </h1>
      <p className="text-sm lg:text-base font-normal text-muted-foreground">
        {subtext}
      </p>
    </div>
  );
}
