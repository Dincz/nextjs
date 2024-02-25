import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not found</h2>
      <p>Sorry,Page not found</p>
      <Link href={"/"}>Back To HomePage</Link> 
    </div>
  )
}
