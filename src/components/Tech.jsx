import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 rounded-2xl flex-col align-center content-center black-gradient
          transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border duration-300 text-center 
          "
          key={technology.name}
        >
          <img className="p-3 " src={technology.icon} />

          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
