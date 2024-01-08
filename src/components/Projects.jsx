import projects from "../content/projects"


const Projects = () => {


    return (
        <>


            <div className="h-auto p-8 backg ">
                <div className="w-full text-center font-bold text-white text-7xl mb-16 underline">Projects</div>
                <div className="flex justify-center overflow-hidden">
                    <div className=" flex  justify-around w-4/5 flex-wrap">
                        {
                            projects.map((project, index) => (
                                <div className=" " key={index}>
                                    <div className="max-w-sm rounded-md overflow-hidden h-full flex flex-col justify-between bg-gray-600  ">
                                        <img className="w-auto img-height " src={`/images/projects/${project.img}`}  alt="Sunset in the mountains" />

                                        <div className="px-6 py-4 text-center">
                                            <div className="font-bold text-xl mb-2">{project.name}</div>
                                            <p className="text-white text-base">
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        <div className="px-6 pt-1 pb-1 flex ">
                                            
                                            {project.stack.map((skil, index) => (

                                                <div key={index} className="h-8 w-8 m-1">
                                                    <img src={`/images/skills/${skil}`} alt='' />
                                                </div>

                                            ))}
                                        </div>
                                        <div className="px-8 pb-2  flex ">
                                            <a href={project.sourceCode} className="github h-10 w-10"target="_blank" rel=" noreferrer">
                                                <img src="/images/skills/git.svg" alt="" />
                                            </a>
                                            <a href={project.preview} className="h-10 w-10 mx-8" target="_blank" rel=" noreferrer">
                                                <img src="/images/skills/live.png" alt="" />
                                            </a>
                                        </div>

                                    </div>


                                    <div></div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Projects