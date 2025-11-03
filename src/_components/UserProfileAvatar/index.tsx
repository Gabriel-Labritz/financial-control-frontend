import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import EditUserImageProfileDialog from "../EditUserImageProfileDialog";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label="Editar foto de perfil"
              className="absolute bottom-0 right-0 size-6 rounded-full hover:scale-105 transition"
            >
              <Pencil />
              <span className="sr-only">Editar foto de perfil</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <EditUserImageProfileDialog />
          </DialogContent>
        </Dialog>
      </div>
      <div className="hidden md:flex flex-col">
        <p className="text-xl font-semibold tracking-tight">{userName}</p>
        <span className="text-sm text-muted-foreground">{userEmail}</span>
      </div>
    </div>
  );
}
