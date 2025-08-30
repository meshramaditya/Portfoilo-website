const About = () => {
  return (
    <section className="min-h-screen bg-gray-300 text-gray-800 p-8 sm:p-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">About Me</h2>

        <p className="text-lg leading-relaxed mb-4">
          I'm Aditya Meshram, a dedicated Full-Stack Web Developer with a B.Tech in Artificial Intelligence and Data Science. I enjoy solving real-world problems through code and love crafting interactive user experiences.
        </p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-red">B.Tech in AI & Data Science – [PCE-Nagpur]</li>
            <li className="text-red">12th – [Z.P. High School & Jr. College]</li>
            <li className="text-red">10th – [Z.P. High School]</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Intern at [BlueStock] – Developed [Web Application]</li>
            <li>Freelance Projects – Built websites for clients using React, Node, and MongoDB</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Hobbies</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Exploring new tech tools and frameworks</li>
            <li>UI/UX design</li>
            <li>Gaming and photography</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
