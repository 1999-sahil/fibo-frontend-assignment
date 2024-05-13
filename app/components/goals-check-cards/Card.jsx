import React, { useState } from "react";

function Card({ title, img, bgColor, isChecked, onCheck }) {

  //const [isGoalChecked, setIsGoalChecked] = useState(false);

  const handleCheck = () => {
    setIsGoalChecked(!isGoalChecked);
  }

  return (
    <div className="min-w-[312px] w-full h-[65px] rounded-[12px] border-[0.9px] border-[#282828] bg-[#282828] flex items-center justify-center">
      {/** container */}
      <div className="w-[282px] h-[32px] flex gap-[12px]">
        {/** image (left) */}
        <div className="w-[32px] h-[32px] rounded-[6.4px] bg-[#3d3d3d] flex items-center justify-center">
            <span>{img}</span>
        </div>

        {/** title and checkBox (right) */}
        <div className="w-[238px] h-[32px] flex items-center justify-between">
            <div className="w-[154px] h-[11px] flex items-center">
              <h2 className="font-dmsans font-medium text-[16px] leading-[20.8px] text-[#ebe9e8] whitespace-nowrap">
                {title}
              </h2>
            </div>
            {/** check box */}
            <div onClick={onCheck} className="w-[32px] h-[32px] flex items-center justify-center rounded-[9.6px]" style={{ border: `1px solid ${bgColor}` }}>
              {isChecked && (
                <div className="w-[32px] h-[32px] rounded-[9.6px] flex items-center justify-center" style={{ backgroundColor: bgColor }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.80017 7.60003L5.60017 10.4L11.2002 4.40002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
