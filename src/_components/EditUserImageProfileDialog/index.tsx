import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditUserImageProfileForm from "../EditUserImageProfileForm";

export default function EditUserImageProfileDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Alterar foto de perfil</DialogTitle>
        <DialogDescription>
          Enviei abaixo sua nova foto de perfil nos formatos: png, jpeg ou jpg.
        </DialogDescription>
      </DialogHeader>
      <EditUserImageProfileForm />
    </>
  );
}
