import Image from "next/image"

const AboutImg = () => {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <div className="bg-hero_shape relative flex h-[250px] w-[270px] items-end justify-center bg-contain bg-bottom bg-no-repeat">
        <Image
          src="/hero/avatar.png"
          alt="avatar"
          width={220}
          height={220}
          className="rounded-full pb-4"
        />
      </div>
    </div>
  )
}

export default AboutImg
