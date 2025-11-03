import EditProfileDialog from "@/_components/EditProfileDialog";
import HeaderBox from "@/_components/HeaderBox";
import UserProfileAvatar from "@/_components/UserProfileAvatar";
import UserProfileInfoCard from "@/_components/UserProfileInfoCard";
import { getUserProfile } from "@/actions/user/user";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import UserProfileAvatarSkeleton from "@/skeleton_components/UserProfileAvatarSkeleton";
import UserProfileInfoCardSkeleton from "@/skeleton_components/UserProfileInfoCardSkeleton";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Pencil } from "lucide-react";
import { Suspense } from "react";

export default async function Profile() {
  const result = await getUserProfile();
  if (!result.user) return;

  const profileImageUrl = result.user.profileImageUrl;

  return (
    <div className="p-4 h-screen">
      <HeaderBox
        type="title"
        title="Sua conta"
        subtext="Visualize as informações de sua conta."
      />

      <section className="relative w-full h-[300px] min-h-[250px] bg-[url('./assets/bg-profile-page.png')] bg-cover bg-center mt-10 rounded-lg">
        <div className="absolute flex items-center justify-between -bottom-14 left-1/2 transform -translate-x-1/2 w-full xl:w-[80%] p-6 bg-gradient-to-r from-muted/94 to-muted/90 mx-auto rounded-lg">
          <Suspense fallback={<UserProfileAvatarSkeleton />}>
            <UserProfileAvatar
              srcImageUrl={profileImageUrl}
              userName={result.user.name}
              userEmail={result.user.email}
            />
          </Suspense>

          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" variant="link">
                <Pencil />
                Editar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <EditProfileDialog userData={result.user} />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="mt-30 w-full">
        <Suspense fallback={<UserProfileInfoCardSkeleton />}>
          <UserProfileInfoCard userData={result.user} />
        </Suspense>
      </section>
    </div>
  );
}
