import projects from "app/data/projects.json";
import ProjectCard from "./project-card"

const Projects = () => {
    return (
        <div className="mt-12 md:mt-20 mx-[10%]" id="projects">
            <h2 className="text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-green text-center md:text-start">Projects</h2>
            <div className="mt-8 md:mt-12 flex flex-row flex-wrap items-center justify-center gap-8 md:gap-3.5 w-full">
                {projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} {...project}/>
                    );
                })}
            </div>
        </div>
    );
}

export default Projects