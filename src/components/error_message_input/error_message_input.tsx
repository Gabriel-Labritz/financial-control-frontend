interface Props {
  message: string | undefined;
}

export default function ErrorMessageInput({ message }: Props) {
  return (
    <>
      <p className="text-[12px] font-sans text-destructive">{message}</p>
    </>
  );
}
