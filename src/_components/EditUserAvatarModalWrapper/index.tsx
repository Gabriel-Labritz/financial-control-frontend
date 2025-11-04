"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import EditUserImageProfileForm from "../EditUserImageProfileForm";
import { useState } from "react";

export default function EditUserAvatarModalWrapper() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <DialogHeader>
          <DialogTitle>Alterar foto de perfil</DialogTitle>
          <DialogDescription>
            Enviei abaixo sua nova foto de perfil nos formatos: png, jpeg ou
            jpg.
          </DialogDescription>
        </DialogHeader>
        <EditUserImageProfileForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
