import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import { ProfileApi } from "../api/auth";
import { AddPostApi } from "../api/others";

const PostPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        experiences: '',
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
        AddPostApi(formData).then((res) => {
            router.push("/freelance/my-posts")
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
        <HeadTag title="Add Post | Bold" />
  
        <header className="header-bg">
          <Navbar />
        </header>
  
        <main>
          <h2 className="m-5 text-gray-800 text-3xl font-bold">Add Post</h2>
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="post-title"
                  >
                    Post Title
                  </label>
                  <input
                    onChange={handleChange}
                    name="title"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Enter post title"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="post-description"
                  >
                    Post Description
                  </label>
                  <textarea
                    onChange={handleChange}
                    name="description"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Enter post description"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="post-description"
                  >
                    Experiences
                  </label>
                  <textarea
                    onChange={handleChange}
                    name="experiences"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Enter your experiences"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="post-description"
                  >
                    Your Skills
                  </label>
                  <input
                    onChange={handleChange}
                    name="skills"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Enter your skills"
                    rows="5"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                  <button
                    className="appearance-none block w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
                    type="submit"
                  >
                    Submit Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
  
        <Footer />
      </div>
    )
}

export default PostPage;