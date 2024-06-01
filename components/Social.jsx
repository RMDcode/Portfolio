import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const socials =[
  {icon: <FaGithub/>,path:'https://github.com/RMDcode'},
  {icon: <FaLinkedinIn/>,path:'https://www.linkedin.com/in/dhurirohit05/'},
  {icon: <FaTwitter/>,path:'https://x.com/Rohit40857845?t=LFQo1k3214RIZY6Nv4MFqw&s=09'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link key={index} href={item.path} 
        className={iconStyles}>
        {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social