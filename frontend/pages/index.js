import React from 'react'
import HeadTag from '../components/HeadTag'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import ClintCat from '../components/ClintCat'
import Footer from '../components/Footer'
import JobSuccessCard from '../components/JobSuccessCard'
import Link from 'next/link'
import { useRouter } from "next/router"
import { motion } from "framer-motion"

export default function Home() {

  {/* ============== Hooks Call =============== */}
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col">

      {/* ============== Head Tag =============== */}
      <HeadTag title="Bold"/>

      {/* ================= Header ================= */}
      <header className="header-bg">
        {/* ============== Navbar ============ */}
        <Navbar/>

        {/* ============= Head Container =============== */}
        <div className="container mx-auto py-3 md:px-5 sm:px-7 px-3">
          {/* ============ First part [banner section] ============  */}
          <section className="mt-7 flex items-center justify-between">
            {/* ========= Right ======== */}
            <div className="flex flex-col space-y-5">
              <motion.h1 className="xl:text-7xl lg:text-6xl text-4xl font-bold text-[#0C4A6E]"
                initial={{y:"100%", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.9}}
              >
                How Work <br/> Should Work 
              </motion.h1>
              <motion.h6 className='text-zinc-500 xl:text-3xl lg:text-xl text-lg font-semibold'
                initial={{y:"100%", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1.5}}
              >
                Forget the old rules. You can have the best people. <br className='lg:block md:hidden block'/>
                Right now. Right here.
              </motion.h6>
            </div>

            {/* ========= Left ======== */}
            <div className="relative">
              <Link href="/jobs/todays-jobs">
                <div className="absolute lg:flex hidden flex-col items-center z-[9] bg-[#F3FFFC] shadow-2xl py-2 px-3 rounded-xl cursor-pointer left-[-3rem] top-0 transition hover:scale-105">
                    <span className="text-[11px] font-semibold text-zinc-700 mb-1">
                      Today's Job
                    </span>
                    <Image src="/images/bag.png" height={30} width={40} alt="bag-image"/>
                </div>
              </Link>

              <div className="mr-10 mt-5 md:block hidden">
                <Image src="/images/headerimg.png" height={350} width={450} alt="header-img"/>
              </div>
              
              {/* ========== job success card Component ================= */}
              <JobSuccessCard/>
            </div>
          </section>
        </div>
      </header>

      {/* ================= Main ==================== */}
      <main>


        {/* ====================== Find Talent Section =================== */}
        <section className="container mx-auto lg:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-0 space-y-3">
            <div className="bg-[url('/images/grilswork.png')] bg-top w-full sm:rounded-xl rounded-none xl:px-14 px-5 py-8">
              <motion.h2 className="text-white font-semibold lg:text-3xl text-xl"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                For Clints
              </motion.h2>

              <motion.h3 className="text-white 2xl:font-bold font-semibold lg:text-6xl text-4xl lg:mt-28 mt-20 leading-tight my-3"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Find Talent <br/>
                Your Way
              </motion.h3>

              <motion.p className="text-white font-semibold lg:text-xl text-md"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Work with the largest network of independent <br/>
                professionals and get things done—from quick <br/>
                turnarounds to big transformations. <br/>
              </motion.p>

              <motion.div className="grid md:grid-cols-3 grid-cols-1 2xl:gap-x-10 md:gap-y-0 gap-y-3 xl:gap-x-7 gap-x-5 mt-10"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                {/* ========= for clint ========== */}
                <ClintCat/>
              </motion.div>
            </div>
        </section>
      </main>

      {/* ==================== Footer ====================== */}
      <Footer/>
    </div>
  )
}