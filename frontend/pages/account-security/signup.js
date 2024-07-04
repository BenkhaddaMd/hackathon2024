import HeadTag from "../../components/HeadTag";
import LoginSignupHeader from "../../components/LoginSignupHeader";
import LoginSignupFooter from "../../components/LoginSignupFooter";
import { FcConferenceCall, FcReadingEbook } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { SignUpApi } from "../api/auth"
import { useRouter } from "next/router";

const SignUp = () => {

    // ==================== Hooks Call ===========================
    const [client, useClient] = useState(false);
    const [freelancer, useFreelancer] = useState(false);
    const [btnText, useBtnText] = useState("Create Account");
    const [clientForm, setClientForm] = useState(false);
    const [freelancerForm, setFreelancerForm] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
    })
    const router = useRouter()


    // ================= Handle Function =========================
    const ClientHandle = () => {
        useClient(true);

        (freelancer == true) ? useFreelancer(false) : null;
        useBtnText("Join as a Client");
    }

    const FreelancerHandle = () => {
        useFreelancer(true);

        (client == true) ? useClient(false) : null;
        useBtnText("Apply as a Freelancer");
    }

    const HandleForm = (e) => {
        e.preventDefault();
        console.log(formData);
        SignUpApi(formData).then((res) => {
            setError('')
            router.push('/account-security/login')
        })
        .catch((err) => {
            if(err.response.data.statusCode === 409)
                setError("Please provide unique values")
        })

    }

    const HandleConditinForm = () => {
        setFormData({
            ...formData,
            role: client?'client':'freelancer',
        });
        if (client == true) {
            setClientForm(true);

            (freelancerForm == true) ? setFreelancerForm(false) : null;
        }

        if (freelancer == true) {
            setFreelancerForm(true);

            (clientForm == true) ? setClientForm(false) : null;
        }
    }

    const handleChange = (e) => {
        setError('')
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Create an Account - Brenda"/>

            {/* ================== Header =================== */}
            <LoginSignupHeader/>

            {/* ================= Main ==================== */}
            <main>
                {/* ================= Condition Section =================== */}
                {(clientForm == true || freelancerForm == true) ? null : <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3 md:flex md:justify-center">
                    <div className="sm:border border-gray-300 rounded-xl">
                        <div className="lg:px-24 md:px-20 sm:px-10 sm:pt-10 pb-10 flex flex-col justify-center md:items-center">
                            {/* ================= Login title ==================== */}
                            <h2 className="font-semibold text-zinc-800 md:text-3xl text-2xl text-center">
                                Join as a client or freelancer
                            </h2>

                            {/* ===================== Create account section ========================== */}
                            <div className="flex md:flex-row flex-col items-center md:space-x-8 md:space-y-0 space-y-5 mt-10">
                                {/* ========== client =========== */}
                                <div className={`${(client == true) ? "bg-[#0C4A6E]" : "bg-[#e5ecea] hover:bg-[#d1dfdb]"} rounded-xl py-7 sm:px-8 px-5 flex flex-col items-center space-y-4 md:max-w-[17rem] md:w-auto w-full cursor-pointer transition`} onClick={ClientHandle}>
                                    <div>
                                        <FcConferenceCall className="text-5xl"/>
                                    </div>
                                    <div>
                                        <h4 className={`${(client == true) ? "text-[#e5ecea]" : "text-zinc-800"} font-semibold text-lg text-center`}>
                                            I’m a client, hiring for a project
                                        </h4>
                                    </div>
                                </div>

                                {/* ========== client =========== */}
                                <div className={`${(freelancer == true) ? "bg-[#0C4A6E]" : "bg-[#e5ecea] hover:bg-[#d1dfdb]"} rounded-xl py-7 sm:px-8 px-5 flex flex-col items-center space-y-4 md:max-w-[17rem] md:w-auto w-full cursor-pointer transition`} onClick={FreelancerHandle}>
                                    <div>
                                        <FcReadingEbook className="text-5xl"/>
                                    </div>
                                    <div>
                                    <h4 className={`${(freelancer == true) ? "text-[#e5ecea]" : "text-zinc-800"} font-semibold text-lg text-center`}>
                                            I’m a freelancer, looking for work
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* =============== Button =================== */}
                            <button className={`${(freelancer == true || client == true) ? "bg-[#0C4A6E] hover:bg-[#18465f] text-[#e5ecea]" : "bg-[#e5ecea] hover:bg-[#d1dfdb] text-gray-500"} py-2 md:px-20 px-3 mt-10 rounded-full font-semibold transition md:w-auto w-full`} onClick={HandleConditinForm}>
                                {btnText}
                            </button>

                            {/* ================ alread have account section ================== */}
                            <div className="mt-7">
                                <p className="text-zinc-800 text-center">
                                    Already have an account? 
                                    <Link href="/account-security/login">
                                        <a className="font-semibold text-blue-700 hover:underline"> Log In </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>}

                {/* ======================== Client Form ====================== */}
                {clientForm &&  <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3 md:flex md:justify-center">
                    <div className="sm:border border-gray-300 rounded-xl">
                        <div className="sm:px-7 sm:pt-10 pb-10 flex flex-col justify-center md:items-center">
                            <h2 className="font-semibold text-zinc-800 md:text-3xl text-2xl text-center">
                                Sign up to find work you love
                            </h2>

                            {/* ================= Username Form ==================== */}
                            <form className="mt-5 space-y-5 sm:w-auto md:w-[42rem] w-full" onSubmit={HandleForm}>
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3] w-full">
                                    <input 
                                        type="text" 
                                        name="username"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent text-zinc-700"
                                        placeholder="Username"
                                        onChange={handleChange}

                                    />
                                </div>

                                {/* ================= email input =============== */}
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3] w-full">
                                    <input 
                                        type="text" 
                                        name="email"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent text-zinc-700"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* ================= password input =============== */}
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3] w-full">
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent text-zinc-700"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <span style={{color: "red"}}>{error}</span>

                                {/* ================= create account button =============== */}
                                <button className="w-full py-2 px-3 bg-[#0C4A6E] rounded-full font-semibold text-white transition hover:bg-[#18465f]" type="submit">
                                    Create an Account
                                </button>
                            </form>

                            {/* ================ alread have account section ================== */}
                            <div className="mt-7">
                                <p className="text-zinc-800 text-center">
                                    Already have an account? 
                                    <Link href="/account-security/login">
                                        <a className="font-semibold text-blue-700 hover:underline"> Log In </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>}

                {/* ======================== Freelancer Form ====================== */}
                {freelancerForm && <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3 md:flex md:justify-center">
                    <div className="sm:border border-gray-300 rounded-xl">
                        <div className="sm:px-7 sm:pt-10 pb-10 flex flex-col justify-center md:items-center">
                            <h2 className="font-semibold text-zinc-800 md:text-3xl text-2xl text-center">
                                Sign up to find work you love
                            </h2>

                            {/* ================= Username Form ==================== */}
                            <form className="mt-5 space-y-5 sm:w-auto md:w-[42rem] w-full" onSubmit={HandleForm}>
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3] w-full">
                                    <input 
                                        type="text" 
                                        name="username"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent text-zinc-700"
                                        placeholder="Username"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* ================= email input =============== */}
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3] w-full">
                                    <input 
                                        type="text" 
                                        name="email"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent text-zinc-700"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* ================= password input =============== */}
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3] w-full">
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent text-zinc-700"
                                        placeholder="Password"
                                        onChange={handleChange}
                                    />
                                </div>

                                <span style={{color: "red"}}>{error}</span>

                                {/* ================= create account button =============== */}
                                <button className="w-full py-2 px-3 bg-[#0C4A6E] rounded-full font-semibold text-white transition hover:bg-[#18465f]" type="submit">
                                    Create an Account
                                </button>
                            </form>

                            {/* ================ alread have account section ================== */}
                            <div className="mt-7">
                                <p className="text-zinc-800 text-center">
                                    Already have an account? 
                                    <Link href="/account-security/login">
                                        <a className="font-semibold text-blue-700 hover:underline"> Log In </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>}
            </main>

            {/* ==================== Footer ====================== */}
            <LoginSignupFooter/>
        </div>
    )
}

export default SignUp;