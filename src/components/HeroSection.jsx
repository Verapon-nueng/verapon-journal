import authorImage from '@/assets/author.jpg'

function HeroSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-10 md:flex-row md:gap-14 md:px-30 md:py-15">
      {/* ซ้าย: หัวข้อหลัก */}
      <div className="text-center md:flex-1 md:text-right">
        <h1 className="text-4xl font-bold leading-tight text-stone-800 md:text-5xl">
          Stay Informed,
          <br />
          Stay Inspired
        </h1>
        <p className="mt-6 text-stone-500">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>

      {/* กลาง: รูปผู้เขียน */}
      <img
        src={authorImage}
        alt="Thompson P. with his cat in an autumn forest"
        className="aspect-[3/4] w-full max-w-sm rounded-2xl object-cover object-[60%_center] md:w-96"
      />

      {/* ขวา: ข้อมูลผู้เขียน */}
      <div className="md:flex-1">
        <p className="text-xs text-stone-400">-Author</p>
        <h2 className="mt-1 text-2xl font-semibold text-stone-800">Thompson P.</h2>
        <p className="mt-3 text-stone-500">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className="mt-6 text-stone-500">
          When I'm not writing, I spends time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
