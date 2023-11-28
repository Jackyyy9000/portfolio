export const SkillsComp: React.FC = () => {
    return (
        <>
            {
                [
                    ['HTML', 'HTML is the standard language for creating and designing web pages.'],
                    ['CSS', 'CSS is a style sheet language used to control the presentation and layout of HTML documents on the web.'],
                    ['Tailwind', 'Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed, low-level utility classes.'],
                    ['Javascript', 'JavaScript is a versatile, high-level programming language primarily used for enhancing interactivity and functionality in web browsers.'],
                    ['Typescript', 'TypeScript is a superset of JavaScript that adds static typing to the language, enhancing code robustness and maintainability.'],
                    ['React', 'React is a JavaScript library for building user interfaces, developed by Facebook, that enables the creation of dynamic and efficient UI components.'],
                    ['Github', 'GitHub is a web-based platform for version control and collaborative software development, facilitating code hosting, sharing, and collaboration among developers.']
                ].map(([skill, label]: Array<string>) => (
                    <div className='px-3 py-2 border border-sky-700 rounded-md bg-sky-900 hover:bg-sky-400 hover:text-sky-900 text-sky-400 font-semibold cursor-pointer has-tooltip'>
                        <span className='max-w-[500px] bg-slate-950 p-[0.33rem] mt-8 -ml-1 rounded-lg shadow-lg tooltip'>{label}</span>
                        {skill}
                    </div>
            ))}
            
        </>
    )
}