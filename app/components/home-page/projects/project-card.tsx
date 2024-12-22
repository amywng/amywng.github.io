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
        <div className="grid grid-rows-3 md:grid-rows-none rounded-[10px] shadow-[0_16px_14px_0_#2b6417] px-6 py-6 
        max-w-[250px] h-[450px] md:max-w-[23%] md:h-[525px]
        bg-[linear-gradient(180deg,_rgba(249,_255,_225,_1)_0%,_#dbf5d1_100%)] text-green justify-center">
            <div className="flex justify-center items-center">
                <a href={source} target="_blank">
                    <img 
                        src={imageSrc} 
                        alt={`Project ${title}`}
                        className="mb-7 h-[95px] md:h-[125px] object-cover"
                    />
                </a>      
            </div>
            <div>
                <h3 className="md:text-xl font-bold">{title}</h3>
                <p className="mt-1.5 md:text-lg font-light leading-5 md:leading-6">{description}</p>
            </div>
            <div className="flex flex-col items-center justify-center -mt-2 md:-mt-4">
                <ul className="w-full md:mt-4 flex flex-row flex-wrap justify-center gap-1 list-none">
                    {skills && skills.map((skill, id) => {
                        return (
                            <li key={id} className="md:text-md rounded-[100px] bg-white px-2 py-0.5 md:px-2.5 md:py-0.5">{skill}</li>
                        );  
                    })}
                </ul>
                <div className="w-3/5 mt-3 md:mt-4 flex justify-around bg-[#baeba8] hover:bg-[#94e078] rounded-[100px] py-0.5 md:py-1">
                    <a href={source} target="_blank" className="no-underline text-lg md:text-xl font-medium flex justify-center items-center gap-1">
                        Source
                        <img src="/projects/Newscreen.png" className="w-4 h-4"/></a>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectCard