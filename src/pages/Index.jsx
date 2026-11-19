import React, { useState } from "react";
import { motion } from "framer-motion";

function Index() {
  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  return (
    <div className="relative  h-screen w-screen">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-5/5 w-full object-[center_-100px] md:object-[center_-0px]"
        src="./bg1.png"
        alt="background"
      />

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/44 z-10"></div>

      {/* Foreground Content */}
      <div className="absolute space-y-10 md:space-y-0 md:flex justify-evenly text-gray-200 z-20 w-full">
        {/* Left Section */}
        <div className="flex md:w-1/3 mt-10 m-5">
          <img
            className="w-1/2 md:w-3/4 md:mt-24 rounded-2xl shadow-2xl md:m-10"
            src="./user.jpeg"
            alt="user"
          />
          {/* Mobile Name & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="w-1/2 pt-10 md:hidden"
          >
            <h1 className="text-xl text-center font-extrabold mb-2 shadow-white">
              ISHIMWE Anna Theodette
            </h1>
            <h3 className="text-xs text-center">
              Website Development | Mobile App Development | Software Project Management | UI/UX Design
            </h3>
          </motion.div>
        </div>

        {/* Middle Section - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 3 }}
          className="w-1/3 hidden md:flex md:flex-col mx-auto mt-48"
        >
          <h1 className="text-3xl text-center font-extrabold mb-2 shadow-white">
            ISHIMWE Anna Theodette
          </h1>
          <h3 className="text-sm text-center">
            Website Development | Mobile App Development | Software Project Management | UI/UX Design
          </h3>
          <h3 className="text-xl font-bold text-center pt-5 italic leading-relaxed">
            Create Scalable and Engaging Applications which Meet the Requirements to Excel with a Simple and Unique Touch
          </h3>
        </motion.div>

        {/* Middle Section - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
          className="md:hidden"
        >
          <h3 className="text-xl font-bold text-center px-5  italic leading-relaxed">
            Own a Scalable and Engaging Application which Meets the Requirements to Excel with a Simple and Unique Touch
          </h3>
        </motion.div>

        {/* Right Section - Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/3  md:mt-36 mx-10"
        >
          
          <ol className="space-y-3 pb-20 md:pb-0">
            {[
              "About",
              "Stack",
              "Education Background",
              "Experience",
              "Contacts",
            ].map((item) => (
              <li
                key={item}
                onClick={() => setOpenModal(item)}
                className="cursor-pointer font-bold  md:bg-transparent hover:bg-gray-200 hover:text-blue-400 border border-gray-100 p-2 rounded-md text-center"
              >
                {item === "Stack" ? "Tech Stacks" : item}
              </li>
            ))}
          </ol>
        </motion.div>
         <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-[#5E4203] pt-8 md:hidden fixed bottom-0 left-0 w-full flex h-20 align-middle justify-center text-white"
      >
        <p>© {new Date().getFullYear()} Anna Ishimwe — Contact me</p>
      </motion.div>
      </div>

      {/* Transparent Modal */}
      {openModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-30 backdrop-blur-sm">
          <div className="bg-white/20 text-white p-8 rounded-2xl w-11/12 md:w-2/3 relative border border-white/30">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl text-white hover:text-gray-300"
            >
              &times;
            </button>
            <h2 className="text-3xl text-center text-[#FCA311] font-semibold mb-4">
              {openModal}
            </h2>

            {/* Modal Content */}
            {openModal === "About" && (
              <div className="space-y-10 text-lg">
                <p className="px-5 bg-neutral-900 p-3 rounded-xl">
                  ANNA is a Software Engineering graduate currently pursuing her Master’s in Data Science,
                  specializing in Data Mining. She has experience in Web Development, Portfolio Development,
                  Mobile Development, IT Consultancy, Prototyping, Website Management, and more.
                </p>
                <div className="flex justify-around">
                  <button
                    onClick={() => setOpenModal("Education Background")}
                    className="bg-[#FCA311] rounded-xl h-8 w-52"
                  >
                    Education Background
                  </button>
                  <button
                    onClick={() => setOpenModal("Experience")}
                    className="bg-[#FCA311] hidden md:flex rounded-xl h-8 w-48"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => setOpenModal("Contacts")}
                    className="bg-[#FCA311] hidden md:flex rounded-xl h-8 w-48"
                  >
                    Contacts
                  </button>
                </div>
              </div>
            )}

            {openModal === "Education Background" && (
              <div className="text-center font-semibold space-y-5">
                <p className="bg-neutral-900 h-14 p-1 md:ml-20 flex items-center justify-around rounded-xl">
                  Currently pursuing a Master’s in Data Science, majoring in Data Mining
                </p>
                <p className="bg-neutral-900 h-12 md:ml-20 flex items-center justify-around rounded-xl">
                  Bachelor’s degree in Software Engineering
                </p>
                <button
                  onClick={() => setOpenModal("Experience")}
                  className="bg-[#FCA311] rounded-xl h-8 w-48"
                >
                  View Experience
                </button>
              </div>
            )}

            {openModal === "Experience" && (
              <div className="text-center space-y-5">
                <div className="flex justify-around space-x-3">
                  <div className="space-y-3">
                    <h1>She has served as:</h1>
                    <p className="flex items-center justify-around">• Software Tester at Cinetie Ltd</p>
                    <p className="flex items-center justify-around">• Full Stack Developer at Global Real Estate</p>
                    <p>She has also completed various freelance projects with:</p>
                    <a className="italic font-semibold text-sm" href="https://kigalifilmacademy.com/">
                      Kigali Film Academy
                    </a>
                    , <a className="italic font-semibold text-sm" href="https://equalis.onrender.com/">Equalis</a>
                    , <a className="italic font-semibold text-sm" href="https://kftvschool.com/">KFTV School</a>
                    , <a className="italic font-semibold text-sm" href="#">Cinetie</a>
                    , <a className="italic font-semibold text-sm" href="https://kftvstudio.com/">KFTV Studio</a> ...
                  </div>
                </div>
                <p className="bg-neutral-900 text-center p-3 rounded-xl">
                  Apart from that, Anna has participated in various internships and tech competitions,
                  including the Bridging Africa Disability Hackathon (secured 4th place), and Creator's Garage
                  (finalist awaiting final pitching).
                </p>
                <button
                  onClick={() => setOpenModal("Contacts")}
                  className="bg-[#FCA311] rounded-xl h-8 w-48"
                >
                  Contact Me
                </button>
              </div>
            )}

            {openModal === "Contacts" && (
              <div className="grid items-center justify-center space-y-3 text-center">
                <h1>Contact me for more information</h1>
                <a href="tel:+250781542221" className="bg-neutral-900 h-10 flex items-center justify-center rounded-4xl hover:bg-neutral-800 transition">
                  +250 781 542 221
                </a>
                <a href="mailto:annatheodette@gmail.com" className="bg-neutral-900 h-10 flex items-center justify-center rounded-4xl hover:bg-neutral-800 transition">
                  annatheodette@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ishimwe-anna-theodette-097b8a23b/" className="bg-neutral-900 h-10 flex items-center justify-center rounded-4xl hover:bg-neutral-800 transition">
                  LinkedIn
                </a>
              </div>
            )}

            {openModal === "Stack" && (
              <div className="grid items-center justify-center space-y-3 text-center">
                <h1>Tech Stacks</h1>
                {["Python", "React Js", "Node Js", "Java - Spring Boot", "PostgreSQL"].map((stack) => (
                  <p key={stack} className="bg-neutral-900 h-10 flex items-center justify-center rounded-xl hover:bg-neutral-800 transition">
                    {stack}
                  </p>
                ))}
                <button onClick={() => setOpenModal("Contacts")} className="bg-[#FCA311] rounded-xl h-8 w-48">
                  Contact Me
                </button>
              </div>
            )}
          </div>

          {/* Mobile Footer */}
     
        </div>
        
      )}

      
    </div>
  );
}

export default Index;
