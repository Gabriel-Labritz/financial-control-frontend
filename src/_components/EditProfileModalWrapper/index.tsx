import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EditProfileForm from "../EditProfileForm";
import { User } from "@/actions/types/types";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface EditProfileDialogProps {
  userData: User;
}

export default function EditProfileModalWrapper({
  userData,
}: EditProfileDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="link">
          <Pencil />
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Conta</DialogTitle>
          <DialogDescription>
            Edite as informações de sua conta aqui.
          </DialogDescription>
        </DialogHeader>
        <EditProfileForm userData={userData} />
      </DialogContent>
    </Dialog>
  );
}
