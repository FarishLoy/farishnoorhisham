import Image from "next/image"
import imageFile from "../public/assets/memoji.png"

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Image src={imageFile} alt="A memoji" className="mr-10" />
      <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 text-center">
        Hi, welcome to my personal blog/portfolio site.
      </h1>
    </section>
  )
}

export default Intro
