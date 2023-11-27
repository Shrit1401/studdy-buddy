import React from "react";
import Post from "../components/Post";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh] w-full overflow-hidden">
      <nav className="flex justify-around py-5">
        <h1 className="krona text-2xl">Studdy Buddy</h1>
        <ul className="flex gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>

      {/* a sidebar in left*/}
      <div className="flex">
        <div className="h-[100vh] w-2/3 overflow-y-scroll">
          <div className="flex flex-col gap-5">
            <Post
              img="https://i.postimg.cc/1z3FmZYP/image.png"
              desc={`
            Incredible News! Our star student, Tejas Agarwal, has finally secured
            2nd place nationally in the ‘Millets as Superfood or Fad’ competition in
            National Science Seminar after taking 1st place at the state level. The
            event was organised on 12th of October 2023 at National Science Center
            Delhi by National Council of Science Museums.Kudos to Tejas for this
            outstanding achievement!Your dedication is an inspiration to all
            Amitians !#Amity #AISV1 #ProudAchievement #htschools`}
            />

            <Post
              img="https://i.postimg.cc/dVk2rFjB/image.png"
              desc={`
            Incredible News! Our star student, Tejas Agarwal, has finally secured
            2nd place nationally in the ‘Millets as Superfood or Fad’ competition in
            National Science Seminar after taking 1st place at the state level. The
            event was organised on 12th of October 2023 at National Science Center
            Delhi by National Council of Science Museums.Kudos to Tejas for this
            outstanding achievement!Your dedication is an inspiration to all
            Amitians !#Amity #AISV1 #ProudAchievement #htschools`}
            />
          </div>
        </div>
        <div className=" w-1/4 ml-5">
          <div className="flex flex-col justify-between items-stretch h-[90vh]">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl font-bold opacity-80">
                More People You May Know
              </h1>

              <div className="flex items-center gap-3">
                <Image
                  src="https://i.postimg.cc/m2XDRFMX/image.png"
                  width={48}
                  height={48}
                  alt=""
                  className="w-14 h-14"
                />
                <div>
                  <p className="font-bold text-xl">Shrit Shrivastava</p>
                  <p className="opacity-60">XI A : AISV1</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="https://i.postimg.cc/SNNPCn5p/image.png"
                  alt=""
                  width={48}
                  height={48}
                  className="w-14 h-14"
                />
                <div>
                  <p className="font-bold text-xl">Kushagra Sinha</p>
                  <p className="opacity-60">XI C : AISV6</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="https://i.postimg.cc/fTNzNfJf/image.png"
                  width={48}
                  height={48}
                  alt=""
                  className="w-14 h-14"
                />
                <div>
                  <p className="font-bold text-xl">Aviral Vohra</p>
                  <p className="opacity-60">XI C : AISV1</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-10">
              <h1 className="text-2xl font-bold opacity-80">Your Teachers</h1>

              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold text-xl">Ms. Lakshmi Krishnan</p>
                  <p className="opacity-60">Chemistry AISV1</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold text-xl">Ms. Amara Singh</p>
                  <p className="opacity-60">Computer AISV1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
