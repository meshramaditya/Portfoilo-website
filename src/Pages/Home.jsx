
const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center text-start bg-gray-300 text-white px-14 overflow-hidden">
      <img
        src="/favicon.png"
        alt="Aditya Meshram"
        className="w-32 h-32 rounded-full border border-black mb-6"
      />

      <h1 className="text-4xl text-black sm:text-4xl font-bold mb-3">Hey, I'm Aditya Meshram</h1>
      <p className="text-lg text-black sm:text-xl max-w-2xl">
        A Full-Stack Web Developer passionate about building fast, responsive, and visually appealing websites using modern tools like React, Tailwind, Node.js, and more.
      </p>

      <a
        href="/RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-black hover:scale-105 transition-transform duration-300 text-white font-medium py-2 px-6 rounded-lg"
      >
        Download Resume 
      </a>
    </section>
  );
};

export default Home;
