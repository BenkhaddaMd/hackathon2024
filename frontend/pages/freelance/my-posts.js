import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { getPostsByUserApi } from "../api/others";
import { ProfileApi } from "../api/auth";

const PostPage = () => {
    const [posts, setPosts] = useState(null);
    const [profileData, setProfileData] = useState(null)

    useEffect(() => {
        ProfileApi().then((res) => {
            setProfileData(res.data)
            getPostsByUserApi(res.data.id)
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            {/* Head Tag */}
            <HeadTag title="My Posts | Bold"/>

            {/* Header */}
            <header className="header-bg">
                {/* Navbar */}
                <Navbar/>
            </header>

            {/* Main Content */}
            <main>
                <h2 className="m-5 text-gray-800 text-3xl font-bold">My Posts </h2>
                <div className="flex flex-wrap items-center justify-center bg-gray-100">
                    {posts?.map((post) => (
                        <div key={post.id} className="max-w-lg w-full rounded overflow-hidden shadow-lg m-5">
                            <img class="w-full" src="/images/fa.png"></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{post.title}</div>
                                <p className="text-gray-700 text-base">{post.description}</p>
                                <p className="text-gray-700">Experiences: {post.experiences}</p>
                                <p className="text-gray-700">Skills: {post.skills}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
}

export default PostPage;
