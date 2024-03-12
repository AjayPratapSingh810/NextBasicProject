"use client"
export const LogoutButton = () =>{
    const handleLogout = () =>{
        alert('logout');
    }
    return <button onClick={handleLogout}>Logout</button>
}