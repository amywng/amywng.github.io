const Contact = () => {
    return (
        <footer id="contact" className="text-white mt-28 bg-[#89dd6a]/[.7] flex flex-row justify-evenly w-screen px-2 py-[5%]">
            <div>
                <h2 className="text-7xl font-bold tracking-wider">Contact</h2>
                <p className="text-4xl tracking-wider">Feel free to reach out!</p>
            </div>
            <ul className="flex flex-col items-start no-underline gap-6">
                <li className="flex itmes-center gap-6">
                    <img src={"app/assets/contact/emailIcon.png"} alt="Email icon"/>
                    <a href="mailto:acwng2@gmail.com"
                        className="text-white no-underline font-3xl tracking-wider"
                    >acwng2@gmail.com</a>
                </li>
                <li className="flex itmes-center gap-6">
                    <img src={"app/assets/contact/linkedinIcon.png"} alt="LinkedIn icon"/>
                    <a href="https://www.linkedin.com/in/amy-wang-17b526248/"
                        className="text-white no-underline font-3xl tracking-wider"
                    >linkedin.com/<br/>in/amy-wang-17b526248</a>
                </li>
                <li className="flex itmes-center gap-6">
                    <img src={"app/assets/contact/githubIcon.png"} alt="Github icon"/>
                    <a href="https://github.com/amywng"
                        className="text-white no-underline font-3xl tracking-wider"
                    >github.com/amywng</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact