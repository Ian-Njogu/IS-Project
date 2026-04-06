import HomeNav from "./HomeNav";

function Founders() {
    return (
        <>
            <HomeNav />
            {/* Hero section */}
            <header>
                <div className='relative w-full overflow-hidden'>
                    <img src="src\assets\hero.jpg" alt="hero" className='w-full h-auto object-cover block' style={{ minHeight: "40vh", maxHeight: "80vh" }} />
                </div>
            </header>

            <section className="py-12 px-4 md:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    {/* Left column */}
                    <div className="flex-1 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Meet the brilliant minds behind this system</h2>
                        <p className="text-gray-800">
                            Sovereign Wawiye and Ian Njogu are Business and IT Students at Strathmore University. 
                            They are in their last semester of their Diploma programme. One of their graduation requirements 
                            is a course named Information Systems Project. They challenged themeselves to take it as an 
                            opportunity to learn new skills as well as sharpen those they have by coming up with a system that 
                            presents a creative solution to a societal problem. Their field of choice was healthcare and particularly 
                            the Organ Donation and Matching Process.
                        </p>
                    </div>

                    {/* Vertical divider */}
                    <div className="hidden md:block w-px bg-gray-300 mx-6"></div>

                    {/* Right column */}
                    <div className="flex-1 md:pl-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Partnerships & Recommendations</h2>
                        <p className="text-gray-800">
                            For partnership proposals or system enhancement recommendations feel free to reach out to us. We are open to learning opportunities.
                        </p><br/>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Founders;