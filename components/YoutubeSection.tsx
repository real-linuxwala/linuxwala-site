export default function YoutubeSection() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Latest Linux Tutorials
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">

        <iframe
          className="w-full h-60"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

        <iframe
          className="w-full h-60"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

        <iframe
          className="w-full h-60"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

      </div>
    </section>
  );
}
