import { SkillsComp } from "./SkillsComp"

export const Home: React.FC = () => {
    return (
        <>
            <div id="home" className='flex flex-col md:flex-row pt-12 md:pt-24 px-6'>      
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col'>
                        <div className='text-5xl pb-2 font-semibold'>
                            Balázs Kerékgyártó
                        </div>
                        <div className='text-xl pb-6 font-light'>
                            Frontend React Developer
                        </div>
                        <div className='text-lg pb-6 text-gray-300'>
                            I am a self-taught Frontend developer who is passionate about new technologies and always looking for new challenges.
                        </div>
                    </div>
                    <div className='flex flex-flow-row flex-wrap gap-4'>
                        <SkillsComp></SkillsComp>
                    </div>
                </div>

                <div className='flex pb-12 md:pb-0 md:px-4 self-center order-first md:order-2'>
                    <img src="./images/selfie.jpg" alt="" className='min-w-[300px] h-[300px] border-2 border-sky-700 rounded-full shadow-[4px_4px_12px_0px_rgba(3,105,161,0.5)]'/>
                </div>
            </div>
        </>
    )
}