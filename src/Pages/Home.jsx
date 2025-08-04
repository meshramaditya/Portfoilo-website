
const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center text-start bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-14 overfolw-hidden">
      <img
        src="/profileImage.jpg"
        alt="Aditya Meshram"
        className="w-20 h-20 rounded-full border-2 border-black mb-6"
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
