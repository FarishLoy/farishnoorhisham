import Image from "next/image"
import imageFile from "../public/assets/memoji.png"

const Intro = () => {
  return (
    <section className="flex-col flex items-center md:justify-between mt-10 mb-16 md:mb-12">
      <Image src={imageFile} alt="A memoji" className="w-48 h-48" />
      <div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
          It's me, hi
        </h1>
      </div>
    </section>
  )
}

export default Intro