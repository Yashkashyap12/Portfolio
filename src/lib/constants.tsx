import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const MenuItems = [
    {
        id:1,
        name:'Home',
        href:'/'
    },
    {
        id:2,
        name:'About',
        href:'/about-us'
    },
    {
        id:3,
        name:'Services',
        href:'/services'
    },
    {
        id:4,
        name:'Resume',
        href:'/YASH-KASHYAP-CV.pdf'
    },
]

const socialLinks = [
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/yash-kashyap-2038b6241/',
  },
  {
    icon: FaGithub,
    url: 'https://github.com/Yashkashyap12',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/gyashkashyap123456/',
  },
  {
    icon: FaWhatsapp,
    url: 'https://wa.me/918738843688', // change to your number
  },
];

export default socialLinks