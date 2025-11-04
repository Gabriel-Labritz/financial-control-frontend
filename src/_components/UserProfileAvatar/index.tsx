import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditUserAvatarModalWrapper from "../EditUserAvatarModalWrapper";

interface UserProfileAvatarProps {
  srcImageUrl: string | null;
  userName: string;
  userEmail: string;
}

export default function UserProfileAvatar({
  srcImageUrl,
  userName,
  userEmail,
}: UserProfileAvatarProps) {
  const userInitial = userName.split(" ").join("").slice(0, 2).toUpperCase();

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="relative">
        <Avatar className="size-22">
          <AvatarImage src={srcImageUrl ?? undefined} alt={userName} />
          <AvatarFallback>{userInitial}</AvatarFallback>
        </Avatar>
        <EditUserAvatarModalWrapper />
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-semibold tracking-tight">{userName}</p>
        <span className="text-sm text-muted-foreground">{userEmail}</span>
      </div>
    </div>
  );
}
