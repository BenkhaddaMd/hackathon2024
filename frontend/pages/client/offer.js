import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { AddOfferApi } from "../api/others";
import Cookies from 'js-cookie';
import { ProfileApi } from "../api/auth";
import { useRouter } from "next/router";

const OfferPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        budget: '',
        deadline: '',
        skills: '',
        userId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        AddOfferApi(formData).then((res) => {
            router.push("/client/offers")
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        ProfileApi().then((res) => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                userId: res.data.id
            }));
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Add Offer | Bold"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                 {/* ======================== Container Section =========================== */}
            </header>

            {/* ================= Main ==================== */}
            <main>
            <h2 className="m-5 text-gray-800 text-3xl font-bold">Add Offer</h2>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="job-title">
                                    Job Title
                                </label>
                                <input onChange={handleChange} name="title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-title" type="text" placeholder="Enter job title"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="job-description">
                                    Job Description
                                </label>
                                <textarea onChange={handleChange} name="description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="job-description" placeholder="Enter job description" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="budget">
                                    Budget
                                </label>
                                <input onChange={handleChange} name="budget" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="budget" type="number" placeholder="Enter budget"/>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="deadline">
                                    Deadline
                                </label>
                                <input onChange={handleChange} name="deadline" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="deadline" type="date"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="skills-required">
                                    Skills Required
                                </label>
                                <input onChange={handleChange} name="skills" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="skills-required" type="text" placeholder="Enter skills required"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6">
                                <button className="appearance-none block w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700" type="submit">
                                    Submit Job Offer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default OfferPage;