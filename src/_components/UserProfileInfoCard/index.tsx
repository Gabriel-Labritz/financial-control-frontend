import { User } from "@/actions/types/types";
import {
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import DeleteUserAccountDialog from "../DeleteUserAccountDialog";
import { formatDate } from "@/utils/format-date";

interface UserProfileInfoCardProps {
  userData: User;
}

export default function UserProfileInfoCard({
  userData,
}: UserProfileInfoCardProps) {
  return (
    <Card className="border-none w-full xl:w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Informações da Conta</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-2">
        <p className="text-sm font-medium">
          Nome:{" "}
          <span className="text-muted-foreground font-normal">
            {userData.name}
          </span>
        </p>
        <p className="text-sm font-medium">
          E-mail:{" "}
          <span className="text-muted-foreground font-normal">
            {userData.email}
          </span>
        </p>
        <p className="text-sm font-medium">
          Data da criação:{" "}
          <span className="text-muted-foreground font-normal">
            {formatDate(userData.createdAt)}
          </span>
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col justify-center">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button type="button" variant="link" className="text-destructive">
              Excluir conta
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <DeleteUserAccountDialog />
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
