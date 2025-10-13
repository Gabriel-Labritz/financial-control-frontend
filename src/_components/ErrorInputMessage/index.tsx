export default function ErrorInputMessage({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <>
      <p className="text-[12px] text-destructive">{errorMessage}</p>
    </>
  );
}
