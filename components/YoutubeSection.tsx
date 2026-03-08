export default function YoutubeSection() {
  return (
    <section className="py-20 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        Latest Linux Tutorials
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        />

        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        />

        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        />

      </div>

    </section>
  )
}
