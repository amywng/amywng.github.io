export interface ProjectProps {
    title?: string;
    imageSrc?: string;
    description?: string;
    skills?: string[];
    source?: string;
}

const ProjectCard = ({ 
    title, 
    imageSrc, 
    description, 
    skills, 
    source
}: ProjectProps) => {
    return (
        <div className="flex flex-col rounded-[10px] shadow-[0_16px_14px_0_#2b6417] px-[18px] py-6 max-w-[250px] h-[550px]
        bg-[linear-gradient(180deg,_rgba(249,_255,_225,_1)_0%,_rgba(193,_235,_126,_0.7)_100%)] text-green justify-center">
            <img 
                src={imageSrc} 
                alt={`Project ${title}`}
                className="mb-7"
            />
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-1.5 text-xl">{description}</p>
            <div className="flex flex-col items-center">
                <ul className="w-full mt-3.5 flex flex-row flex-wrap justify-center gap-1 list-none">
                    {skills && skills.map((skill, id) => {
                        return (
                            <li key={id} className="text-xl rounded-[100px] bg-white px-4 py-1">{skill}</li>
                        );  
                    })}
                </ul>
                <div className="w-1/2 mt-3 flex justify-around bg-lime hover:bg-light_lime rounded-[100px] py-1">
                    <a href={source} target="_blank" className="no-underline text-xl font-semibold">Source</a>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectCard