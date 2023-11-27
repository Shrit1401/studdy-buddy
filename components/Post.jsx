import React from "react";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const Post = ({ img, desc }) => {
  return (
    <div className="flex flex-col border border-black mx-3 py-2 rounded-lg border-opacity-25">
      <div className="flex justify-between mx-3 items-center">
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12"
            src="https://i.postimg.cc/P5zq39Js/image.png"
            alt=""
          />
          <p className="krona text-xl">
            Amity International School Vasundhara Sector 1
          </p>
        </div>

        <IoEllipsisVerticalSharp className="text-3xl" />
      </div>
      <img src={img} className="rounded-[20px] my-3 mx-3" alt="" />
      <p className="font-medium mx-3">
        <b>AISV1: </b>
        {desc}
      </p>
    </div>
  );
};

export default Post;
