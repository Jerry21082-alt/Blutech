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
        <div className="w-auto">
          <Link href="/" className="text-lg md:text-[40px] font-semibold">
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
