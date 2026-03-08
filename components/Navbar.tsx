export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-gray-950 text-white">

      <h1 className="text-2xl font-bold">
        LinuxWala.ai
      </h1>

      <div className="flex gap-8 text-sm">

        <a href="/" className="hover:text-green-400">
          Home
        </a>

        <a href="/courses" className="hover:text-green-400">
          Courses
        </a>

        <a
          href="https://youtube.com/@real-linuxwala.official"
          className="hover:text-green-400"
        >
          YouTube
        </a>

        <a
          href="https://discord.gg/3UQr3PPv"
          className="hover:text-green-400"
        >
          Community
        </a>

      </div>

    </nav>
  )
}
