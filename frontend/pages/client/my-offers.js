import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { ApplyApi, GetApplicationByUserApi, getOffersApi, getOffersByUserApi } from "../api/others";
import { ProfileApi } from "../api/auth";
import { useRouter } from "next/router";

const MyOffersPage = () => {

    const [offers, setOffers] = useState(null)
    const [profileData, setProfileData] = useState(null)
    const [applications, setApplications] = useState(null)
    const router = useRouter();

    const handleApplication = (id) => {
        ApplyApi({offerId: id, userId:profileData.id}).then((res) => {
            console.log(res);
            setChange(true)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        ProfileApi().then((res) => {
            setProfileData(res.data)
            getOffersByUserApi(res.data.id).then((res) => {
                setOffers(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            GetApplicationByUserApi(res.data.id).then((res) => {
                setApplications(res.data)
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="My Offers | Bold"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                 {/* ======================== Container Section =========================== */}
            </header>

            {/* ================= Main ==================== */}
            <main>
            <h2 className="m-5 text-gray-800 text-3xl font-bold">My Offers</h2>
                <div className="flex flex-wrap items-center justify-center bg-gray-100">
                        {offers?.map((offer) => (
                            <div key={offer.id} className="max-w-sm rounded overflow-hidden shadow-lg m-5">
                                <img className="w-full" src="/images/fac.png" alt="Offer"></img>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{offer.title}</div>
                                    <p className="text-gray-700 text-base">{offer.description}</p>
                                    <p className="text-gray-700">Deadline: {new Date(offer.deadline).toLocaleDateString()}</p>
                                    <p className="text-gray-700">Budget: ${offer.budget}</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    {offer.skills.split(',').map((skill, index) => (
                                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                            #{skill.trim()}
                                        </span>
                                    ))}
                                </div>
                                {profileData?.role === "freelancer" && !applications?.some(application => application.offer.id === offer.id) &&
                                <div className="px-6 pt-4 pb-2">
                                    <button onClick={() => handleApplication(offer.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Apply
                                    </button>
                                </div>
                                }
                                {profileData?.role === "freelancer" && applications?.some(application => application.offer.id === offer.id) &&
                                <div className="px-6 pt-4 pb-2">
                                    <button disabled={true} className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500  rounded">
                                        Already applied
                                    </button>
                                </div>
                                }
                            </div>

                        ))}
                </div>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default MyOffersPage;