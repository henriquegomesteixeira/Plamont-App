import Image from "next/image";

const BannerProfile = () => {
  return (
    <div>
      <Image
        src="/banner.jpg"
        width={500}
        height={80}
        alt="Background Plamont"
        className="mb-4 h-52 w-full rounded-md"
      />
    </div>
  );
};

export default BannerProfile;
