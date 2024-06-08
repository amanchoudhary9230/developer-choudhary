import { FaHome, FaUserAlt } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const navItems: NavItem[] = [
  { name: "Home", link: "/", icon: <FaHome/> },
  { name: "About", link: "#about", icon: <FaUserAlt /> },
  { name: "Projects", link: "#projects", icon: <SiPeerlist /> },
];