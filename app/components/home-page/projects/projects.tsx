import projects from "app/data/projects.json";
import ProjectCard from "./project-card"

const Projects = () => {
    return (
        <section className="mt-20 mx-[10%]" id="projects">
            <h2 className="text-4xl font-bold tracking-[1.75px] uppercase text-green">Projects</h2>
            <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-3.5 w-full">
                {projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} {...project}/>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects