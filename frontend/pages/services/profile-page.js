import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import ServiceSearch from "../../components/ServiceSearch";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { ProfileApi } from "../api/auth";
import { useRouter } from "next/router";

const ProfilePage = () => {

    const [profileData, setProfileData] = useState(null)
    const router = useRouter()

    useEffect(() => {
        ProfileApi().then((res) => {
            setProfileData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Profile | Bold"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                 {/* ======================== Container Section =========================== */}
            </header>

            {/* ================= Main ==================== */}
            <main>
            <h2 className="m-5 text-gray-800 text-3xl font-bold">Your Profile</h2>

                <div className="p-5 bg-gray-200  dark:bg-gray-800 flex flex-wrap items-center  justify-center  ">
                    <div className="container lg:w-5/6 xl:w-6/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                        <div className=" h-32 overflow-hidden" >
                            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                        </div>
                        <div className="flex justify-center px-5  -mt-12">
                            <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                        </div>
                        <div className=" ">
                            <div className="text-center px-14">
                                <h2 className="text-gray-800 text-3xl font-bold">{profileData?.username} {"["+profileData?.role+"]"}</h2>
                                <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">@{profileData?.email}</a>
                                <p className="mt-2 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            </div>
                            <hr className="mt-6" />
                            <div className="flex  bg-gray-50 ">
                                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer" onClick={() => router.push(profileData?.role === "freelancer"?'/freelance/post':'/client/offer')}>
                                    {profileData?.role === "freelancer" &&
                                        <p>Add Post</p>
                                    }
                                    {profileData?.role === "client" &&
                                        <p>Add Offer</p>
                                    }
                                </div>
                                <div className="border"></div>
                                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer" onClick={() => router.push(profileData?.role === "freelancer"?'/client/offers':'/freelance/posts')}>
                                    {profileData?.role === "freelancer" &&
                                        <p>Show Offers</p>
                                    }
                                    {profileData?.role === "client" &&
                                        <p>Show Posts</p>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default ProfilePage;