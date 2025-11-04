import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  srcImageUrl: string | null;
  userName: string;
}

export default function UserAvatar({ srcImageUrl, userName }: UserAvatarProps) {
  const userNameInitials = userName
    .split(" ")
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Avatar>
      <AvatarImage src={srcImageUrl ?? undefined} alt={userName} />
      <AvatarFallback>{userNameInitials}</AvatarFallback>
    </Avatar>
  );
}
