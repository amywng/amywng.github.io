import languages from "app/data/languages.json";
import history from "app/data/history.json";
import tools from "app/data/tools.json";

const Experience = () => {
    return (
        <div className="mt-12 md:mt-20 mx-[10%] flex justify-evenly" id="experience">
            <div className="flex flex-col md:flex-row md:mt-3.5 gap-9">
                <div className="flex-nowrap">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-blue text-center md:text-start mb-8 md:mb-12">Experience</h2>
                    <ul className="w-full flex flex-col gap-12 md:gap-16">
                        {history.map((historyItem, id) => {
                            return (
                                <li key={id} className="flex flex-col md:flex-row items-start md:items-center gap-4 
                                bg-[linear-gradient(90deg,_#5ABAFA_0%,_rgba(90,_186,_250,_0.2)_18%,_#f0f7fc_100%)] 
                                rounded-[10px] p-6 text-blue">
                                    <img 
                                        src={historyItem.imageSrc}
                                        alt={`${historyItem.organisation} Logo`}
                                        className="hidden md:block md:static md:mt-0 md:ml-0 md:w-16 md:h-16"
                                    />
                                    <div className="py-4">
                                        <h3 className="text-xl md:text-2xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p className="mt-2 md:text-xl font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul className="mt-4 list-inside md:text-xl ml-4 list-none">
                                            {historyItem.experiences.map((experience, id) => {
                                                return <li key={id}
                                                className="relative pl-5 before:content-[''] before:absolute before:left-1 md:before:left-0 before:top-2 before:h-[8px] before:w-[8px] md:before:h-[12px] md:before:w-[12px] before:bg-bullet before:bg-cover">{experience}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="md:w-[75%] flex flex-wrap gap-12">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-blue text-center mb-8 md:mb-16">Programming Languages</h2>
                        <div className="flex flex-wrap gap-3 md:gap-5 justify-center">
                            {languages.map((language, id) => {
                                return (
                                    <div key={id} className="flex flex-col items-center gap-y-2.5">
                                        <div className="bg-[#CEEAFE] rounded-[100%] flex items-center justify-center w-16 h-16 md:w-24 md:h-24 mx-2">
                                            <img src={language.imageSrc}
                                            alt={language.title} 
                                            className="w-10 md:w-14"/>
                                        </div>
                                        <p className="md:text-xl font-medium text-blue">{language.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-blue text-center mb-8 md:mb-16">Frameworks and Tools</h2>
                        <div className="flex flex-wrap gap-3 md:gap-5 justify-center">
                        {tools.map((tool, id) => {
                                return (
                                    <div key={id} className="flex flex-col items-center gap-y-2.5">
                                        <div className="bg-[#CEEAFE] rounded-[100%] flex items-center justify-center w-16 h-16 md:w-24 md:h-24 mx-2">
                                            <img src={tool.imageSrc}
                                            alt={tool.title} 
                                            className="w-10 md:w-14"/>
                                        </div>
                                        <p className="md:text-xl font-medium text-blue">{tool.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience