export default function Newsletter() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-bold">
        The LinuxWala Weekly
      </h2>

      <p className="mt-4">
        Linux tips, DevOps insights and infrastructure learning.
      </p>

      <div className="mt-8">
        <input
          className="border px-4 py-2 mr-2"
          placeholder="Enter your email"
        />

        <button className="bg-black text-white px-6 py-2 rounded">
          Subscribe
        </button>
      </div>

    </section>
  );
}
