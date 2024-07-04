import HeadTag from "../../components/HeadTag";
import LoginSignupHeader from "../../components/LoginSignupHeader";
import { BsFillPersonFill } from "react-icons/bs";
import LoginSignupFooter from "../../components/LoginSignupFooter";
import { useRouter } from "next/router";
import { useState } from "react";
import { LoginApi } from "../api/auth"
import Cookies from 'js-cookie';

const Login = () => {

    // ================= Hooks Call =======================
    const router = useRouter();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    // ================= Function Handle ===================
    const HandleForm = (e) => {
        e.preventDefault();

        LoginApi(formData).then((res) => {
            setError('')
            const token = res.data.token;
            Cookies.set('authToken', token, { expires: 7 }); 
            router.push("/services/profile-page")
        })
        .catch((err) => {
            if(err.response.data.code === "FIND_USER_ERROR")
                setError(err.response.data.message)
        })
    }

    const handleChange = (e) => {
        // setError('')
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Log In - Bold"/>

            {/* ================== Header =================== */}
            <LoginSignupHeader/>

            {/* ================= Main ==================== */}
            <main>
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3 sm:flex sm:justify-center">
                    <div className="sm:border border-gray-300 rounded-xl">
                        <div className="sm:px-24 sm:pt-7 pb-7 flex flex-col justify-center items-center">
                            {/* ================= Login title ==================== */}
                            <h2 className="font-semibold text-zinc-800 md:text-3xl text-2xl">
                                Log in
                            </h2>

                            {/* ================= Login Email Form ==================== */}
                            <form className="mt-7 space-y-4 sm:w-auto w-full" onSubmit={HandleForm}>
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg sm:w-[25rem] items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3]">
                                    <BsFillPersonFill className="text-lg text-zinc-700 cursor-pointer hover:text-zinc-500"/>
                                    <input 
                                        onChange={handleChange}
                                        type="text"
                                        name="email"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent mx-3 text-zinc-700"
                                        placeholder="Username or Email"
                                    />
                                </div>
                                <div className="flex flex-grow border-2 border-gray-300 transition rounded-lg sm:w-[25rem] items-center xl:px-6 px-3 py-1.5 hover:bg-[#F3FFFC] hover:ring-2 ring-[#729bb3]">
                                    <input 
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                        className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent mx-3 text-zinc-700"
                                        placeholder="Your password"
                                    />
                                </div>
                                <span style={{color: "red"}}>{error}</span>
                                <button className="w-full py-2 px-3 bg-[#0C4A6E] rounded-full font-semibold text-white transition hover:bg-[#18465f]" type="submit">
                                    Login
                                </button>
                            </form>
                        </div>

                        {/* ================= Don't have account section ================= */}
                        <div className="lg:px-24 py-7 flex flex-col justify-center items-center border-t border-gray-300 mt-7">
                            {/* ================= Or section ==================== */}
                            <div className="flex w-full justify-center items-center">
                                <span className="text-zinc-600"> Don't have a Bold Account? </span>
                            </div>
                            {/* ============== */}
                            <div className="sm:w-auto w-full">
                                <button className="w-full py-2 sm:px-20 px-3 border border-[#0C4A6E] rounded-full font-semibold text-[#0C4A6E] transition hover:border-[#0C4A6E] hover:text-[#0C4A6E] flex items-center justify-center mt-5" onClick={() => router.push("/account-security/signup")}>
                                    sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ==================== Footer ====================== */}
            <LoginSignupFooter/>
        </div>
    )
}

export default Login;