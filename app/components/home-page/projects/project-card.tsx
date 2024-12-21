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
        <div className="grid grid-rows-3 rounded-[10px] shadow-[0_16px_14px_0_#2b6417] px-6 py-6 max-w-[250px] h-[550px]
        bg-[linear-gradient(180deg,_rgba(249,_255,_225,_1)_0%,_#dbf5d1_100%)] text-green justify-center">
            <div className="flex justify-center items-center">
                <img 
                    src={imageSrc} 
                    alt={`Project ${title}`}
                    className="mb-7 h-[125px] object-cover"
                />
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-1.5 text-lg font-light leading-6">{description}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <ul className="w-full mt-4 flex flex-row flex-wrap justify-center gap-1 list-none">
                    {skills && skills.map((skill, id) => {
                        return (
                            <li key={id} className="text-lg rounded-[100px] bg-white px-4 py-1">{skill}</li>
                        );  
                    })}
                </ul>
                <div className="w-1/2 mt-3 flex justify-around bg-[#baeba8] hover:bg-[#94e078] rounded-[100px] py-1">
                    <a href={source} target="_blank" className="no-underline text-xl font-medium">Source</a>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectCard