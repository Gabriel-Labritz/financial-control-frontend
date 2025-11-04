import EditProfileModalWrapper from "@/_components/EditProfileModalWrapper";
import HeaderBox from "@/_components/HeaderBox";
import UserProfileAvatar from "@/_components/UserProfileAvatar";
import UserProfileInfoCard from "@/_components/UserProfileInfoCard";
import { getUserProfile } from "@/actions/user/user";
import UserProfileAvatarSkeleton from "@/skeleton_components/UserProfileAvatarSkeleton";
import UserProfileInfoCardSkeleton from "@/skeleton_components/UserProfileInfoCardSkeleton";
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

          <EditProfileModalWrapper userData={result.user} />
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
