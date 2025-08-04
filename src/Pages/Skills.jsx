const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10">
      <h2 className="text-3xl sm:text-4xl text-black font-bold mb-6 text-center">
        My Skills
      </h2>
      <p className="text-gray-800 mb-6 text-center max-w-xl">
        Here are some of the technologies and tools I work with:
      </p>

      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          "React.js",
          "Next.js",
          "TypeScript",
          "Redux",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "REST APIs",
          "Authentication",
          "Middleware",
          "MongoDB",
          "PostgreSQL",
          "Firebase",
          "NoSQL",
          "Indexing",
          "Webpack",
          "GitHub Actions",
          "Postman",
          "CI/CD",
          "Docker",
          "NPM",
          "Yarn"
        ].map((skill) => (
          <div
            key={skill}
            className="bg-black text-white hover:scale-105 transition-all duration-200 px-4 py-2 rounded-md shadow text-center font-semibold"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
