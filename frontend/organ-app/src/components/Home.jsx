import HomeNav from './HomeNav'
/* import all the icons and dependencies*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function Home() {
    return (
        <>
            <HomeNav />
            {/* Hero section */}
            <header>
                <div className='relative w-full overflow-hidden'>
                    <img src="src\assets\hero.jpg" alt="hero" className='w-full h-auto object-cover block' style={{ minHeight: "40vh", maxHeight: "80vh" }} />

                    <div className='absolute inset-0 flex items-center justify-center p-4'>
                        <div className="bg-[#042c6d]/90 text-xl p-8 rounded-lg shadow-xl max-w-2xl text-center" >
                            <h1 className="text-xl font-bold text-white">Welcome to the Hospital Organ Donation Matching System</h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-12 px-4 md:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    {/* Left column */}
                    <div className="flex-1 mb-8 md:mb-0 md:pr-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Organ Donation As We Know It</h2>
                        <p className="text-gray-800">
                            Hospital-based organ donation and transplant coordination have been a complicated and delicate process.
                            In Kenya, the organ donation matching process is unreliable. It is characterized by disproportionate
                            data handling and inefficient decision making. Consequently, patients in desperate need of organ
                            transplants are forced to wait for extended periods of time for a suitable organ donation, resulting in death.
                            Medical practitioners are also impacted by the systematic inefficiency.<br />
                            The process of obtaining organs from donors and matching of donors with suitable recipients difficult.
                            This can be attributed to a number of factors, one of them being reliance on manual matching systems.
                        </p>
                    </div>

                    {/* Vertical divider (hidden on mobile, visible on md+) */}
                    <div className="hidden md:block w-px bg-gray-300 mx-6"></div>

                    {/* Right column */}
                    <div className="flex-1 md:pl-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">The Solution</h2>
                        <p className="text-gray-800">
                            This project puts forward a system that simplifies the process of matching suitable organ donors with suitable
                            organ recipients. It hopes to address the gaps in current practices as well as improving efficiency, transparency
                            and cooperation between the parties involved in the organ donation process.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="text-center mt-7">
                    <h2 className="font-bold">Users in the System</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto gap-6 mt-5 px-20 py-4">
                    {/* user cards */}
                    <div className="rounded-lg shadow-md overflow-hidden bg-[#c2c1c1] text-[#5d503f] transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <div className="flex justify-center pt-6">
                            <FontAwesomeIcon icon="fa-solid fa-hospital-user" className='w-12 h-12' />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 text-center">Transplant Coordinators</h3>
                            <p className="mt-3">
                                A Transplant Coordinator is a medical practitioner who deals with
                                record keeping and management functions within a hospital.
                                They manage the information of the organ donors and organ recipients in the system.
                                The coordinator registers donor and recipient patients by entering their details
                                and posting their medical tests.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-md overflow-hidden bg-[#c3c3c3] text-[#5d503f] transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <div className="flex justify-center pt-6">
                            <FontAwesomeIcon icon="fa-solid fa-user-doctor" className='w-12 h-12' />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 text-center">Healthcare Professionals</h3>
                            <p className="mt-3">
                                A Healthcare Professional is a doctor or nurse who is going to be a part
                                of the team carrying out the transplant procedure.
                                They are able to view verified patient medical records and match results
                                generated by the system, which they use in clinical decision-making.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-md overflow-hidden bg-[#c3c3c3] text-[#5d503f] transition-all duration-300 hover:scale-105 hover:shadow-md">
                        <div className="flex justify-center pt-6">
                            <FontAwesomeIcon icon="fa-solid fa-user-gear" className='w-12 h-12' />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2 text-center">System Administrator</h3>
                            <p className="mt-3">
                                The System Administrator is a technician who is in charge of general platform operation and security.
                                They handle system accounts and assigning user roles as well as user permissions.
                                The administrator oversees system activity and creates operational reports of the system performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Home;

