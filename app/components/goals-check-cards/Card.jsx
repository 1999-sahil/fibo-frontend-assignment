import React from "react";

function Card({ title, img, color }) {
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
              <h2 className="font-dmsans font-medium text-[15px] leading-[20.8px] text-[#ebe9e8] whitespace-nowrap">
                {title}
              </h2>
            </div>
            {/** check box */}
            <div className={`w-[32px] h-[32px] rounded-[9.6px] border bg-[${color}]`}>
              c
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
