import h1 from '../../../assets/images/h11.png';
import h2 from '../../../assets/images/h22.png';
import h3 from '../../../assets/images/h33.png';
const HelpSection = () => {
    return (
        <div className='lg:bg-[#FDF0F0] my-32'>
           <div className='max-w-7xl mx-auto pt-20 pb-10'>
           <div className="text-center space-y-5">
                <h1 className="text-5xl font-semibold">See How Realtor Can Help</h1>
                <p>Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {/* card 1 */}
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={h1} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title font-semibold">Buy a property</h2>
                        <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline btn-error">Find a home</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                {/* card 1 */}
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={h2} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title font-semibold">Sell a property</h2>
                        <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline btn-error">Place an ad</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                {/* card 1 */}
                <div className=" w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={h3} alt="Shoes" className="" />
                    </figure>
                    <div className="card-body items-center text-center space-y-3">
                        <h2 className="card-title font-semibold">Rent a property</h2>
                        <p>Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.</p>
                        <div className="card-actions">
                        <button className="btn btn-outline btn-error">Find a rental</button>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
            </div>
           </div>

        </div>
    );
};

export default HelpSection;