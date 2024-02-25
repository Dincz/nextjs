"use client"

import Link from "next/link";
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation";
//
const NavLink = ({ item }) => {
  console.log("WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
  const pathName = usePathname();
  console.log("pathname"+pathName)
  return (
   <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
  );
};

export default NavLink;