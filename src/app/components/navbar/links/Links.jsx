import Link from "next/link";
import style from "./links.module.css"
import NavLink from "./navLink/navLink";
const Links = ()=>{

    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"contact",
            path:"/contact"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"blog",
            path:"/blog"
        },
        {
            title:"login",
            path:"/login"
         },
        // {
        //     title:"register",
        //     path:"/register"
        // },
        // {
        //     title:"ForgotPassword",
        //     path:"/ForgotPassword"
        // },
    ];

return (
    <div className={style.Link}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
    </div>
)
    }


export default Links;