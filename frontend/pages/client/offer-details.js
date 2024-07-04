import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { ProfileApi } from "../api/auth";
import { useRouter } from "next/router";
import { useParams } from 'react-router-dom';
import { getOfferApplicationsUsersApi, getOffersByIdApi } from "../api/others";

const OfferDetailsPage = () => {
    const router = useRouter();
    const { offerId } = router.query;
    const [offer, setOffer] = useState(null);
    const [applications, setApplications] = useState(null);

    useEffect(() => {
        if(offerId){
            getOffersByIdApi(offerId).then((res) => {
                console.log(res.data);
                setOffer(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    
            getOfferApplicationsUsersApi(offerId).then((res) => {
                console.log(res.data);
                setApplications(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }
             
    }, [offerId])
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
            <h2 className="m-5 text-gray-800 text-3xl font-bold">Offer Details</h2>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="rounded overflow-hidden shadow-lg m-5 p-5">
                        <img style={{ maxHeight: '200px', objectFit: 'cover' }} className="w-full" src="/images/fac.png" alt="Offer"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{offer?.title}</div>
                            <p className="text-gray-700 text-base">{offer?.description}</p>
                            <p className="text-gray-700">Deadline: {new Date(offer?.deadline).toLocaleDateString()}</p>
                            <p className="text-gray-700">Budget: ${offer?.budget}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {offer?.skills.split(',').map((skill, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    #{skill.trim()}
                                </span>
                            ))}
                        </div>
                        <h6 className="m-5 text-gray-800 text-l font-bold">Liste of Applications</h6>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {applications?.map((app) => (
                            <article key={app.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <p
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                {app.username}
                                </p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <p>
                                    <span className="absolute inset-0" />
                                    Email: {app.email}
                                </p>
                                </h3>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src="/images/ac1.jpeg" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <p>
                                    <span className="absolute inset-0" />
                                    {app.role}
                                    </p>
                                </p>
                                <p className="text-gray-600">{}</p>
                                </div>
                            </div>
                            </article>
                        ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default OfferDetailsPage;