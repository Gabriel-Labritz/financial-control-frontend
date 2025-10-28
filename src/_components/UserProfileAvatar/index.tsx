import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface UserProfileAvatarProps {
  srcImageUrl: string;
  userName: string;
  userEmail: string;
}

export default function UserProfileAvatar({
  srcImageUrl,
  userName,
  userEmail,
}: UserProfileAvatarProps) {
  return (
    <div className="flex justify-center items-center gap-4 border">
      <div className="relative">
        <Avatar className="size-22">
          <AvatarImage src={srcImageUrl} alt={userName} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button
          type="button"
          variant="default"
          className="absolute bottom-0 right-0 size-6 rounded-full"
        >
          <Pencil />
          <span className="sr-only">Editar foto de perfil</span>
        </Button>
      </div>
      <div className="hidden md:flex flex-col">
        <p className="text-xl font-semibold tracking-tight">{userName}</p>
        <span className="text-sm text-muted-foreground">{userEmail}</span>
      </div>
    </div>
  );
}
