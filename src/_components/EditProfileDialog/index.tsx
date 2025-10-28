import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditProfileForm from "../EditProfileForm";
import { User } from "@/actions/types/types";

interface EditProfileDialogProps {
  userData: User;
}

export default function EditProfileDialog({
  userData,
}: EditProfileDialogProps) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Editar Conta</DialogTitle>
        <DialogDescription>
          Edite as informações de sua conta aqui.
        </DialogDescription>
      </DialogHeader>
      <EditProfileForm userData={userData} />
    </>
  );
}
