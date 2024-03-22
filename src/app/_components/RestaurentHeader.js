import Link from "next/link";

const RestaurentHeader = () => {
    return ( 
        <div className="header-wrapper">
        <div className="logo">
        <img style={{width:100}} src="https://t4.ftcdn.net/jpg/03/11/03/29/240_F_311032970_ooEZgb2tKbmxx7X1crfmOXz0xWmPqDsU.jpg" alt="logo" />
        
        </div>
        <ul>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/">Login/SignUp</Link>
        </li>
        <li>
        <Link href="/">Profile</Link>
        </li>
        </ul>
        </div>
     );
}
 
export default RestaurentHeader;