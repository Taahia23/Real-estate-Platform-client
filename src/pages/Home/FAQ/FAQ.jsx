import Container from "../../../Components/Container/Container";


const FAQ = () => {
    return (
        <Container>
            <div>
                <h1 className="text-6xl text-center py-20 font-bold font-mono ">FAQ</h1>
            </div>
            <div className="space-y-5">
                <div className="collapse collapse-arrow bg-base-200 p-5">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How do I contact the property owner or agent?
                    </div>
                    <div className="collapse-content">
                        <p>Each property listing includes contact information for the respective property owner or agent. You can use the provided email or phone number to get in touch directly.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 p-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I search for available properties on your website?
                    </div>
                    <div className="collapse-content">
                        <p>You can easily search for properties by using the search bar on our homepage. Enter specific details like location, property type, and price range to find listings that match your criteria.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 p-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I save properties to revisit later?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can create an account on our website and save your favorite properties for future reference. Simply click the Save button on the property listing page.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FAQ;