import React , {useState} from "react";
import HeadSubhead from "./head-subhead";
import { dummyData } from "@/styles/dummy-data";

const Faq = () => {
  const [isToggle , setIsToggle] = useState(null);

  const handleClick = (i) => {
    setIsToggle(isToggle === i ? null : i);
  }
  return (
    <div className="xl:px-0 px-4">
      <HeadSubhead name={"FAQ"} subname={"Frequently asked question"} />
      <div className="w-full max-w-7xl mx-auto p-4  md:my-6 sm:my-4 my-3">
        <div className="space-y-4">
          {
            dummyData.FaqData.map((ele,i) => (
            <div key={i} className="bg-[#3D3D3D] md:p-4 md:px-8 sm:p-4 p-3 rounded-lg">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleClick(i)}>
                <h3 className="md:text-lg text-base font-semibold">
                 {ele.ques}
                </h3>
                {isToggle === i ? "-" : "+"}
              </div>
              {
                isToggle === i &&
              <p className="mt-2 text-[#858587] md:text-lg sm:text-sm text-xs">
               {ele.ans}
              </p>
              }
            </div>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Faq;
