import Image from "next/image"

const HeroImg = () => {
  return (
    <div className="relative hidden lg:flex">
      <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark absolute -right-2 -top-1 h-[500px] w-[500px] animate-pulse bg-no-repeat"></div>
      <div className="bg-hero_shape relative flex h-[470px] w-[510px] items-end justify-center bg-bottom bg-no-repeat">
        <Image
          src="/hero/avatar.png"
          alt="avatar"
          width={320}
          height={320}
          className="rounded-full pb-5"
        />
      </div>
    </div>
  )
}

export default HeroImg
