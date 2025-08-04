const projects = [
  {
    title: "Note Tracking App",
    description: "A full-stack app with user authentication, note CRUD operations using React, Node.js, and MongoDB.",
    image: "/project-1.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal website to showcase my skills and projects using React and Tailwind CSS.",
    image: "/project-2.jpg",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app using OpenWeather API with current and weekly forecasts.",
    image: "/project-3.jpg",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 sm:p-16">
      <h2 className="text-3xl sm:text-4xl text-black font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-transparent border border-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 px-2 py-4"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
            <div className="p-4">
              <h3 className="text-xl text-black font-semibold mb-2">{project.title}</h3>
              <p className="text-black">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
