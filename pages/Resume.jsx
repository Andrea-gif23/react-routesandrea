import { studies, experiences } from "../data/resume";

const Resume = () => {
  return (
    <div>
      <h1>Currículum</h1>
      <h2>Educación</h2>
      {studies.map((study) => (
        <div key={study.id}>
          <h3>{study.title}</h3>
          <p>{study.institution}</p>
          <p>{study.date}</p>
        </div>
      ))}
      <h2>Experiencia Laboral</h2>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <h3>{experience.title}</h3>
          <p>{experience.company}</p>
          <p>{experience.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Resume;