interface TechLogoCardProps {
  techName: string;
  img: string;
}

export default function TechLogoCard({ techName, img }: TechLogoCardProps) {
  return (
    <div className="w-58 h-full rounded-xl border p-4 overflow-hidden cursor-pointer">
      <div className="flex flex-col items-center gap-2">
        <img
          src={img}
          alt={techName}
          className="size-20 xl:size-26 object-cover"
        />
        <p className="text-sm font-medium">{techName}</p>
      </div>
    </div>
  );
}
