"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [toggleDoctor, setToggleDoctor] = useState(false);

  const handleToggleDoctor = () => setToggleDoctor((prevState) => !prevState);

  return (
    <section className="fixed top-0 left-0 w-screen h-[62.5px] md:h-[89px] z-50">
      <div
        className="w-full h-full bg-white flex items-center overflow-hidden"
        style={{ padding: "calc(8px + 1.5625vw)" }}
      >
        <div className="w-auto flex items-center">
          <div className="flex items-center flex-wrap w-14">
            <div>
              <svg
                width="23"
                height="27"
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8414 0.0199362V14.3936C22.8414 15.2807 22.7517 16.1579 22.5623 16.9952C22.343 18.0618 21.9842 19.0885 21.5057 20.0354C20.2896 22.4476 18.3259 24.4113 15.9137 25.6274C15.2857 25.9464 14.6279 26.2155 13.9401 26.4149C12.7738 26.7737 11.5478 26.9631 10.2719 26.9631H0.99182C0.981852 26.8235 0.971886 26.674 0.971886 26.5245C0.971886 25.4579 1.23105 24.4612 1.6796 23.574C1.77928 23.3747 1.88893 23.1753 2.01851 22.9859C3.16482 21.2116 5.16836 20.0354 7.451 20.0354H8.66708C8.72689 20.0454 8.7867 20.0454 8.8465 20.0454C8.90631 20.0454 8.96612 20.0454 9.02593 20.0354C12.8436 19.9457 15.9137 16.8158 15.9137 12.9682V6.48909C15.9137 5.42252 16.1729 4.42573 16.6214 3.53859C17.688 1.43537 19.8809 0 22.4028 0C22.5523 0 22.7018 0.00996833 22.8414 0.0199362Z"
                  fill="#0341A7"
                />
              </svg>
            </div>
            <div>
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7183 21.5258C27.7183 21.6753 27.7083 21.8249 27.6983 21.9644H13.5539C12.607 21.9644 11.68 21.8548 10.7928 21.6554C9.7761 21.4361 8.80922 21.0872 7.91211 20.6287C5.49988 19.4126 3.53621 17.449 2.32013 15.0367C2.03106 14.4686 1.79183 13.8805 1.60244 13.2624H1.59248C1.19376 12.0464 0.984436 10.7406 0.984436 9.39491V0.324151C1.13395 0.314183 1.28347 0.304214 1.43299 0.304214C2.28026 0.304214 3.09762 0.47367 3.84521 0.772706C3.98476 0.822545 4.11435 0.882351 4.24393 0.952126C6.41693 1.98878 7.91211 4.21162 7.91211 6.78333V7.96951C7.91211 11.8171 10.9822 14.947 14.7999 15.0367C14.8597 15.0467 14.9195 15.0467 14.9793 15.0467C15.0391 15.0467 15.0989 15.0467 15.1587 15.0367H21.2292C22.3655 15.0367 23.4321 15.3258 24.3591 15.8342C26.3626 16.9406 27.7183 19.0737 27.7183 21.5258Z"
                  fill="#0341A7"
                />
              </svg>
            </div>
            <div style={{ transform: "rotate(90deg)" }}>
              <svg
                width="24"
                height="27"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.1231 0.455559C23.1231 1.58193 22.834 2.64849 22.3257 3.5755C22.2559 3.69512 22.1861 3.8247 22.1064 3.94431C20.9501 5.73853 18.9366 6.93468 16.644 6.93468H14.9793C11.0819 6.93468 7.91211 10.1045 7.91211 14.0019V20.5209C7.91211 21.5675 7.66291 22.5643 7.21436 23.4315C6.15776 25.5447 3.96483 27 1.43299 27C1.28347 27 1.13395 26.99 0.984436 26.9801V12.5765C0.984436 11.789 1.05421 11.0115 1.20373 10.2639C1.41305 9.08774 1.8018 7.97133 2.32013 6.93468C3.53621 4.52245 5.49988 2.55878 7.91211 1.3427C8.61983 0.983855 9.37739 0.694788 10.1549 0.475495C11.2314 0.166491 12.3777 0.00700378 13.5539 0.00700378H23.1031C23.1131 0.156522 23.1231 0.306041 23.1231 0.455559Z"
                  fill="#0341A7"
                />
              </svg>
            </div>
            <div style={{ transform: "rotate(-90deg)" }}>
              <svg
                width="27"
                height="22"
                viewBox="0 0 27 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.8435 12.5765V21.9264C26.674 21.9363 26.5046 21.9463 26.3351 21.9463C25.5178 21.9463 24.7403 21.7968 24.0226 21.5177C23.8033 21.4379 23.594 21.3482 23.3846 21.2386C21.5406 20.3016 20.2148 18.5074 19.9158 16.3842V14.0019C19.9158 10.1045 16.746 6.93468 12.8486 6.93468H6.48909C5.39262 6.93468 4.35596 6.66554 3.44888 6.18709C1.3955 5.10059 0 2.93756 0 0.455559C0 0.306041 0.00996833 0.156522 0.0199362 0.00700378H14.274C15.3107 0.00700378 16.3174 0.136589 17.2743 0.375818C18.2013 0.595111 19.0885 0.924048 19.9158 1.3427C22.328 2.55878 24.2917 4.52245 25.5078 6.93468C25.8367 7.58259 26.1059 8.27037 26.3152 8.97809C26.6641 10.1144 26.8435 11.3305 26.8435 12.5765Z"
                  fill="#0341A7"
                />
              </svg>
            </div>
          </div>
          <Link
            href="/"
            className="text-lg md:text-[40px] font-semibold text-[#0341A7]"
          >
            Unlimi<span className="text-red-600">.</span>
          </Link>
        </div>

        <div className="flex-1 w-full">
          <div className="w-full flex justify-between items-center">
            <div className="h-[42px] w-full md:w-[264px] border border-borderColor rounded-[7px] ml-[10%] hidden md:block">
              <div className="w-full h-full overflow-hidden flex items-center p-4 space-x-2 md:space-x-4 cursor-pointer">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6151 12.8879C10.3959 13.8356 8.86384 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.86384 13.8356 10.3959 12.8879 11.6151L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L11.6151 12.8879ZM12.6 7.2C12.6 10.1823 10.1823 12.6 7.2 12.6C4.21766 12.6 1.8 10.1823 1.8 7.2C1.8 4.21766 4.21766 1.8 7.2 1.8C10.1823 1.8 12.6 4.21766 12.6 7.2Z"
                    fill="#9AA0A8"
                  />
                </svg>

                <input type="text" placeholder="search by patients..." />
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4 justify-end w-full">
              <div className="w-[30px] h-[30px] relative bg-iconBgColor rounded-full flex items-center justify-center cursor-pointer">
                <div className="w-[6px] h-[6px] absolute bg-white rounded-full top-[5px] right-2 flex items-center justify-center">
                  <div className="bg-primaryColor w-1 h-1 rounded-full" />
                </div>
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.40513 18.05C8.42796 18.05 9.25641 17.2215 9.25641 16.1987H5.55385C5.55385 17.2215 6.3823 18.05 7.40513 18.05ZM12.959 12.4962V7.86795C12.959 5.0216 11.4456 2.64733 8.79359 2.0179V1.38846C8.79359 0.620179 8.17341 0 7.40513 0C6.63685 0 6.01667 0.620179 6.01667 1.38846V2.0179C3.36471 2.64733 1.85128 5.0216 1.85128 7.86795V12.4962L0 14.3474V15.2731H14.8103V14.3474L12.959 12.4962Z"
                    fill="#9B9FAB"
                  />
                </svg>
              </div>

              <div className="flex items-center space-x-1 md:space-x-2">
                <div className="w-[34px] h-[34px]">
                  <div className="flex items-center justify-center overflow-hidden bg-iconBgLight w-full h-full rounded-full cursor-pointer">
                    <Image
                      src="/icons/doctor-standing-with-folder-stethoscope 1.png"
                      alt="doctor-standing-with-folder-stethoscope"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                  <Link href="/" className="w-10 cursor-pointer">
                    <span className="font-[500] text-grayText">Deko</span>
                  </Link>

                  <div
                    className="cursor-pointer"
                    style={{
                      transform: toggleDoctor ? "rotate(180deg)" : null,
                      transition: "transform .4s ease",
                    }}
                    onClick={handleToggleDoctor}
                  >
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.41944 7.37079L13.0694 1.71079C13.1632 1.61783 13.2376 1.50723 13.2883 1.38537C13.3391 1.26351 13.3652 1.1328 13.3652 1.00079C13.3652 0.868781 13.3391 0.738075 13.2883 0.616216C13.2376 0.494356 13.1632 0.383755 13.0694 0.290792C12.8821 0.104542 12.6286 -3.21984e-08 12.3644 -4.37463e-08C12.1003 -5.52942e-08 11.8468 0.104541 11.6594 0.290792L6.65944 5.24079L1.70944 0.290792C1.52207 0.104541 1.26862 -5.2876e-07 1.00444 -5.40308e-07C0.740251 -5.51856e-07 0.486799 0.104541 0.299437 0.290792C0.204948 0.383407 0.129778 0.493852 0.0782814 0.615727C0.0267849 0.737602 -1.33894e-05 0.868485 -0.000562712 1.00079C-1.3401e-05 1.1331 0.0267848 1.26398 0.0782813 1.38586C0.129778 1.50773 0.204948 1.61818 0.299436 1.71079L5.94944 7.37079C6.04308 7.4723 6.15673 7.55331 6.28323 7.60871C6.40973 7.66412 6.54633 7.69272 6.68444 7.69272C6.82254 7.69272 6.95914 7.66412 7.08564 7.60871C7.21214 7.55331 7.32579 7.4723 7.41944 7.37079Z"
                        fill="#94979E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
