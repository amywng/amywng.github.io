import languages from "app/data/languages.json";
import history from "app/data/history.json";
import tools from "app/data/tools.json";

const Experience = () => {
    return (
        <div className="mt-20 mx-[10%] flex justify-evenly" id="experience">
            <div className="flex flex-row mt-3.5 gap-9">
                <div className="flex-nowrap">
                    <h2 className="text-4xl font-bold tracking-[1.75px] uppercase text-blue">Experience</h2>
                    <br/>
                    <ul className="w-full flex flex-col gap-10">
                        {history.map((historyItem, id) => {
                            return (
                                <li key={id} className="flex flex-row items-center gap-4 
                                bg-[linear-gradient(90deg,_#72DDF7_0%,_rgba(190,_231,_232,_0.4)_50%,_rgba(190,_231,_232,_0.4)_60%,_rgba(193,_235,_126,_1)_100%)] 
                                rounded-[10px] p-6 text-blue">
                                    <img 
                                        src={historyItem.imageSrc}
                                        alt={`${historyItem.organisation} Logo`}
                                        className="w-16 h-16"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p className="text-xl font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul className="mt-1.5 list-inside text-xl list-disc ml-4">
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
                <div className="w-[75%] flex flex-wrap gap-5">
                    <div>
                        <h2 className="text-4xl font-bold tracking-[1.75px] uppercase text-blue text-center">Programming Languages</h2>
                        <br/>
                        <div className="flex flex-wrap gap-5 justify-center">
                            {languages.map((language, id) => {
                                return (
                                    <div key={id} className="flex flex-col items-center gap-y-2.5">
                                        <div className="bg-[#C1EB7E] rounded-[100%] flex items-center justify-center w-24 h-24 mx-2">
                                            <img src={language.imageSrc}
                                            alt={language.title} 
                                            className="w-14"/>
                                        </div>
                                        <p className="text-xl font-medium">{language.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-[1.75px] uppercase text-blue text-center">Frameworks and Tools</h2>
                        <br/>
                        <div className="flex flex-wrap gap-5 justify-center">
                        {tools.map((tool, id) => {
                                return (
                                    <div key={id} className="flex flex-col items-center gap-y-2.5">
                                        <div className="bg-[#C1EB7E] rounded-[100%] flex items-center justify-center w-24 h-24 mx-2">
                                            <img src={tool.imageSrc}
                                            alt={tool.title} 
                                            className="w-14"/>
                                        </div>
                                        <p className="text-xl font-medium">{tool.title}</p>
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