type ChildProps = {
    sectionName: string,
    emoji: string
}

export const SectionName: React.FC<ChildProps> = ({sectionName, emoji}) => {
    return (
        <div className='pt-16 mb-8 mx-6 text-3xl font-semibold border-b'>
            {sectionName} {emoji}
        </div>
    )
}