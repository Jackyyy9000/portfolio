export const Projects: React.FC = () => {
    return (
        <>
            <div className="px-6">
                <div className="h-[100%] flex flex-row flex-wrap md:flex-nowrap justify-center hover:bg-slate-800 p-4 rounded-lg cursor-pointer">
                    
                    {/* Snapshot of the project */}
                    <div className="relative flex items-center">
                        <img className="max-w-[320px] max-h-[180px] border border-gray-700 rounded-lg" src="./images/Portfolio.png"/>
                        <div className="w-[100%] h-[100%] absolute rounded-lg hover:backdrop-blur-[2px] has-preview">
                            <a className="w-[100%] h-[100%] flex items-center justify-center text-3xl text-gray-300 font-semibold preview" href="#home">Live Demo</a>
                        </div>
                    </div>
                    
                    {/* Everything else */}
                    <div className="flex flex-col justify-between pt-4 md:pt-0 md:pl-4">
                        <div className="flex flex-row flex-nowrap justify-between items-center py-2 text-2xl font-semibold">
                            Portfolio website
                            <a href="https://github.com/Jackyyy9000/portfolio" target={"_blank"}>
                                <img src="./images/github-mark.png" className="w-[36px] h-[36px] rounded-md"/> 
                            </a>
                        </div>
                        <div className="pb-2">
                            An official website to put my projects in one place with previews and live demos accessible to anyone who would like to take a deeper dive into what I do and how I do it. On top of that, it is my first major project released, where I showcase my ability to work with CSS and Javascript and their related libraries, frameworks. 
                        </div>
                        <div className="flex flex-row flex-wrap">
                            {
                                ["Typescript", "React", "Tailwind"].map((techUsed: string) => (
                                    <div className='h-[28px] flex align-center items-center px-3 mr-1 border border-sky-700 rounded-full text-sky-400 text-sm font-semibold'>
                                        {techUsed}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

