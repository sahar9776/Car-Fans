import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Socials({ containerStyles, iconStyles }) {
  const socialList = [
    { icon: <FaInstagram />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaTwitter />, path: "" },
  ];
  return (
    <div className={containerStyles}>
      {socialList.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
