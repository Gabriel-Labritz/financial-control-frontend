import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserAvatar() {
  return (
    <Avatar className="size-8">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
