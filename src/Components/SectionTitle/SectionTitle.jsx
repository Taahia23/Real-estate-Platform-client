
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-1/3 mx-auto my-5">
            <p className="text-blue-700 font-serif text-xl py-3 text-center">~~~ {subHeading} ~~~</p>
            <h3 className="text-4xl text-center py-3 uppercase border-y-2 border-y-black">{heading}</h3>
        </div>
    );
};

export default SectionTitle;