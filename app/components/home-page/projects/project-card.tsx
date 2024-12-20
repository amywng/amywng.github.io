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
        <div className="flex flex-col rounded-[10px] shadow-[0_16px_14px_0_#04152d] px-[18px] py-6 max-w-[345px]">
            <img 
                src={imageSrc} 
                alt={`Project ${title}`}
                className="mb-7"
            />
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-1.5 text-2xl">{description}</p>
            <ul className="w-full mt-3.5 flex flex-row flex-wrap gap-1.5 list-none">
                {skills && skills.map((skill, id) => {
                    return (
                        <li key={id} className="text-2xl rounded-[100px] bg-white px-0.5 py-5">{skill}</li>
                    );  
                })}
            </ul>
            <div className="w-full mt-7 flex justify-around">
                <a href={source} className="no-underline text-3xl font-semibold rounded-[100px] px-px py-5">Source</a>
            </div>
        </div>
    );
};

export default ProjectCard