import experienceList from "../data/experience";
import HeaderLine from "../components/UI/HeaderLine";

function Experience() {
  return (
    <div className="md:w-[60%] w-[80%] mt-[4rem]">
      <h2 className="font-extrabold text-[3.5rem] mb-5 flex items-center text-accent-blue">
        <HeaderLine color="accent-blue" />
        Experience.
      </h2>{" "}
      <div className="grid gap-[2rem] Experience">
        {experienceList.map((exp, i) => (
          <div key={i} className="grid gap-4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-extrabold text-fg">{exp.company}</h2>
              <p className="text-[1.1rem] font-bold">{exp.period}</p>
            </div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-extrabold text-accent-blue">
                {exp.role}
              </h2>
              <p className="text-[1.1rem] font-bold">{exp.location}</p>
            </div>
            <p>{exp.job}</p>
            <ul>
              {exp.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="my-[2rem]">
              <HeaderLine color="accent-blue" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
