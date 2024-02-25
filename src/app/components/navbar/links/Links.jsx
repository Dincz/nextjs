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
        {
            title:"register",
            path:"/register"
        },
        {
            title:"ForgotPassword",
            path:"/ForgotPassword"
        },
    ];
//Tempory Data
    const session = true;
    const isAdmin = true;

return (
    <div className={style.Link}>
        {links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
        {
    session ? (
        <>
            {isAdmin && (<NavLink item={{title:"Admin", path:"/admin"}}/>)}
            <button className={style.logout}>LOGOUT</button>
        </>
            ) : (
        <NavLink item={{title:"login", path:"/login"}}/>
        )
 }

    </div>
)
}


export default Links;

