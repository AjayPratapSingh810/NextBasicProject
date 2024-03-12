import Link from "next/link";
import { LogoutButton } from "../../components/Client.jsx";
const header = () =>{

    return <div className="header">
    <div>
      <h2>Todo.</h2>
    </div>
    <article>
      <Link href={"/"}>Home</Link>
      <Link href={"/profile"}>Profile</Link>
      <LogoutButton />
    </article>
  </div>
}

export default header;