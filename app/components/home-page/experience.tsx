import languages from "app/data/languages.json";
import history from "app/data/history.json";
import tools from "app/data/tools.json";

const Experience = () => {
    return (
        <div className="mt-20 mx-[10%] flex justify-evenly" id="experience">
            <div className="flex flex-row mt-3.5">
                <div className="flex-nowrap">
                    <h2 className="text-4xl font-bold tracking-[1.75px] uppercase">Experience</h2>
                    <br/>
                    <ul className="w-full flex flex-col gap-10">
                        {history.map((historyItem, id) => {
                            return (
                                <li key={id} className="flex flex-row items-center gap-4 bg-[#19376d] rounded-[10px] p-6">
                                    <img 
                                        src={historyItem.imageSrc}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                    <div>
                                        <h3 className="text-3xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p className="text-xl font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul className="mt-1.5 list-inside text-2xl list-disc ml-4">
                                            {historyItem.experiences.map((experience, id) => {
                                                return <li key={id}>{experience}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="width-[90%] flex flex-wrap gap-5">
                    <div>
                        <h2 className="text-4xl font-bold tracking-[1.75px] uppercase">Programming Languages</h2>
                        <br/>
                        <div className="width-[90%] flex flex-wrap gap-5">
                            {languages.map((language, id) => {
                                return (
                                    <div key={id} className="flex flex-col items-center gap-2.5">
                                        <div className="bg-[#C1EB7E] rounded-[100%] flex items-center justify-center w-32 h-32">
                                            <img src={language.imageSrc}
                                            alt={language.title} 
                                            className="w-20"/>
                                        </div>
                                        <p className="text-2xl font-medium">{language.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-[1.75px] uppercase">Frameworks and Tools</h2>
                        <br/>
                        <div className="width-[90%] flex flex-wrap gap-5">
                        {tools.map((tool, id) => {
                                return (
                                    <div key={id} className="flex flex-col items-center gap-2.5">
                                        <div className="bg-[#C1EB7E] rounded-[100%] flex items-center justify-center w-32 h-32">
                                            <img src={tool.imageSrc}
                                            alt={tool.title} 
                                            className="w-20"/>
                                        </div>
                                        <p className="text-2xl font-medium">{tool.title}</p>
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