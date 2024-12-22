import { useState } from "react";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("saas");

  const saasOptions = [
    { img: "/github.png", text: "Sign in with Github", onClick: "/dashboard" },
    { img: "/bitbucket.png", text: "Sign in with Bitbucket", onClick: "/dashboard" },
    { img: "/azure.png", text: "Sign in with Azure DevOps", onClick: "/dashboard" },
    { img: "/gitlab.png", text: "Sign in with Gitlab", onClick: "/dashboard" },
  ];

  const selfHostedOptions = [
    { img: "/gitlab.png", text: "Self Hosted GitLab", onClick: "/dashboard" },
    { img: "/key.png", text: "Sign in With SSO ", onClick: "/dashboard" },
  ];
  const renderOptions = (options: any[]) =>
    options.map((option) => (
      <button
        key={option.text}
        onClick={() => window.location.href = option.onClick}
        className="flex flex-row items-center justify-center gap-4 p-4 border-[1px] border-gray-300 rounded-md hover:bg-gray-100 w-full"
      >
        <img src={option.img} alt={option.text} className="w-8 h-8" />
        <span className="text-lg font-medium text-center">{option.text}</span>
      </button>
    ));


  return (
    <div className="bg-[#fafafa] md:flex md:flex-row md:justify-center md:items-center h-[100vh] border-[1px] border-[#f3f2f2]">
      {/* Left Section */}
      <div className="bg-[#ffffff] h-[100vh] md:flex flex-col items-center justify-center w-[50%] hidden">
        <div className="md:flex flex-col items-end relative">
          <div className="flex flex-col bg-white rounded-xl h-max shadow-xl pb-[1rem]">
            <div className="p-4 font-semibold text-lg pr-[5rem] flex flex-row items-center justify-center font-[inter] gap-2">
              <img src="./Group 37110.png" alt="" />
              <p>AI to Detect & Autofix Bad Code</p>
            </div>
            <hr className="h-[1px] w-full bg-[#f3f2f2]" />
            <div className="flex flex-row gap-6 p-4 items-center">
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">30+</p>
                <p className="text-gray-600">Language Support</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">10K+</p>
                <p className="text-gray-600">Developers</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">100K+</p>
                <p className="text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white w-[15rem] relative top-[-2rem] left-[6rem] shadow-xl p-5 rounded-2xl flex flex-col gap-2 mt-4 border-[1px] border-[#f3f2f2]">
          <div className="flex flex-row items-center justify-between">
            <img src="/signin.png" alt="" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center text-[#0049c6] justify-center">
                <img src="./arrow.png" alt="" />
                <p>14%</p>
              </div>
              <p className="text-gray-600 text-sm pl-2">This week</p>
            </div>
          </div>
          <p>Issues Fixed</p>
          <p className="text-3xl font-semibold">500K+</p>
        </div>
        <img
          src="/Subtract.png"
          alt=""
          className="hidden md:block absolute bottom-0 left-0"
        />
      </div>


      {/* Right Section */}
      <div className="flex flex-col items-center justify-center h-[100vh] gap-2 md:w-[50%] w-full">
        <div className="bg-white h-[35rem] md:h-[602px] rounded-md flex flex-col items-center w-[22rem] md:w-max pt-4 gap-5 border-[1px] border-[#f3f2f2]">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="/Group 37110.png" alt="" />
            <p>CodeAnt AI</p>
          </div>
          <h1 className="font-semibold text-3xl">Welcome to CodeAnt AI</h1>
          <div className="flex flex-row gap-2 items-center md:p-4">
            <button
              onClick={() => setActiveTab("saas")}
              className={`text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md text-center ${activeTab === "saas" ? "bg-[#1470ef] text-white" : "bg-[#fafafa] text-black"} font-inter text-[20px] font-semibold leading-[28px] text-left decoration-skip-ink`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("self-hosted")}
              className={`text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md text-center ${activeTab === "self-hosted" ? "bg-[#1470ef] text-white" : "bg-[#fafafa] text-black"} font-inter text-[20px] font-semibold leading-[28px] text-left decoration-skip-ink`}
            >
              Self Hosted
            </button>
          </div>
          <hr className="h-[1px] w-full bg-[#f3f2f2]" />
          <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
            {activeTab === "saas" && renderOptions(saasOptions)}
            {activeTab === "self-hosted" && renderOptions(selfHostedOptions)}
          </div>
          
          
        </div> 
        <p>
            By signing up you agree to the{" "}
            <span className="font-semibold">Privacy Policy.</span>
          </p>
        </div>
      </div>
      );
}
