// // import React from 'react'

// import { LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons"
// import React from "react"
// import { TeamMemberProps} from ".."

// const CustomCard: React.FC<TeamMemberProps> = ({teamImg ,...props}) => {
//   return (
//     <div>
//         <div className="flex-col md:items-center  w-full max-w-sm md:max-w-[300px] bg-white rounded-lg shadow-md ">
//            <div className={props.className + "  h-52 flex items-center justify-center"}>
//              <img src={teamImg} alt="Team Member" className="w-[70%] h-52 rounded-md" />
//            </div>
//             <div className="flex flex-col md:items-center gap-2 p-2">
//                 <h2 className="font-bold text-sm">{props.name}</h2>
//             <p className="text-[12px] font-semibold">{props.position}</p>
//             <p className="text-[12px] ">{props.description}</p>
//             <div className="md:text-center">
//             {props.socialLinks.linkedin && (
//                 <a href={props.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
//                 <LinkedinFilled className="text-[20px] !text-[#0077B5] mr-2" />
//                 </a>
//             )}
//             {props.socialLinks.twitter && (
//                 <a href={props.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
//                 <TwitterSquareFilled className="text-[20px] !text-[#1DA1F2]" />
//                 </a>
//             )}
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default CustomCard

import { LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons"
import React from "react"
import { TeamMemberProps } from ".."

const CustomCard: React.FC<TeamMemberProps> = ({ teamImg, ...props }) => {
  return (
    <div className="transition-transform transform hover:scale-105 duration-300">
      <div className="flex-col md:items-center w-full max-w-sm md:max-w-[300px] bg-white rounded-lg shadow-md h-[400px] overflow-hidden">
        <div className={`${props.className || ""} h-52 flex items-center justify-center`}>
          <img
            src={teamImg}
            alt="Team Member"
            className={`w-full h-full object-scale-down rounded-md ${props.imageSize ||""}`}
          />
        </div>
        <div className="flex flex-col md:items-center gap-2 p-2">
          <h2 className="font-bold text-sm">{props.name}</h2>
          <p className="text-[12px] font-semibold">{props.position}</p>
          <p className="text-[12px] line-clamp-5">{props.description}</p>
          <div className="md:text-center">
            {props.socialLinks.linkedin && (
              <a href={props.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinFilled className="text-[20px] !text-[#0077B5] mr-2" />
              </a>
            )}
            {props.socialLinks.twitter && (
              <a href={props.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <TwitterSquareFilled className="text-[20px] !text-[#1DA1F2]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCard
