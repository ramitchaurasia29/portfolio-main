import Navbar from "./Navbar"


function Contact() {
    return (
        <>
            <Navbar></Navbar>
            <section className="bg-white dark:bg-gray-900 h-max">

                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white underline">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Did you like my work😍feel free to contact for any queries</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="type your name here" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-300 sm:w-fit hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                    <div className="flex flex-col">
                        <div className="text-white text-center h-auto w-auto mt-6 text-2xl m-4 font-extrabold ">Here my handles</div>
                        <div className="px-8 pb-2  flex justify-center">
                            <a href="https://github.com/ramitchaurasia29" className="github h-10 w-10 mx-2" target="_blank" rel=" noreferrer">
                                <img src="/images/skills/git.svg" alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/ramit-chaurasia-12a67b197/" className="github h-10 w-10 mx-2" target="_blank" rel=" noreferrer">
                                <img src="/images/socials/linkedin.svg" alt="" />
                            </a>
                            <a href="" className="github h-10 w-10 mx-2" target="_blank" rel=" noreferrer">
                                <img src="/images/socials/instagram.svg" alt="" />
                            </a>
                            <a href="" className="github h-10 w-10 mx-2" target="_blank" rel=" noreferrer">
                                <img src="/images/socials/facebook.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact