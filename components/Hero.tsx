export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">
        Master Linux, DevOps & AI Infrastructure
      </h1>

      <p className="mt-6 text-xl text-gray-300">
        Tutorials, hands-on labs and a community for engineers.
      </p>

      <div className="mt-10 space-x-4">
        <a
          href="https://youtube.com/@real-linuxwala.official"
          className="bg-red-600 px-6 py-3 rounded-lg"
        >
          Watch on YouTube
        </a>

        <a
          href="https://discord.gg/3UQr3PPv"
          className="bg-indigo-600 px-6 py-3 rounded-lg"
        >
          Join Discord
        </a>
      </div>
    </section>
  );
}
