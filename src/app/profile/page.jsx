"use client"
import { useContext } from "react";
import Context from "../../../components/context/Context.jsx";
import { useRouter } from "next/navigation.js";


const Page = () =>{
   const {user} = useContext(Context);
   const router = useRouter();

   console.log("User ==>", user)
    if(!user?.name && !user?.email){
        router.push("/login");
    }

    return <>
   <h1>Profile Page</h1>
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    </>

}
export default Page;