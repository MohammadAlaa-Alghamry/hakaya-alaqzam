import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faTwitter, faInstagram, faFacebookF
} from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    return(
<div className="w-full  px-8 py-11 bg-[rgb(246,235,223)]">
<div className="container flex justify-center align-middle flex-col gap-6 ">

<ul className="flex justify-around align-middle gap-5 mx-auto md:w-[50%]  ">
    <li >
        <Link href={""} className="text-[rgb(127,131,65)] ">Contact us</Link>
    </li>
    <li>
        <Link href={""} className="text-[rgb(127,131,65)] ">About us</Link>
    </li>
    <li>
        <Link href={""}className="text-[rgb(127,131,65)] ">Copy rights</Link>
    </li>
</ul>

<ul className="flex justify-around align-middle gap-5 mx-auto md:w-[30%]  ">
    <li style={{
        backgroundColor: 'rgb(127, 131, 65)',
        display: 'flex',
        height: '35px',
        width: '35px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}>
        <Link href={""}  >  
        <FontAwesomeIcon icon={faInstagram} />
      
        </Link>
    </li>
    <li style={{
        backgroundColor: 'rgb(127, 131, 65)',
        display: 'flex',
        height: '35px',
        width: '35px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}>
        <Link href={""} >
        <FontAwesomeIcon icon={faTwitter} />
        </Link>
    </li>
    <li style={{
        backgroundColor: 'rgb(127, 131, 65)',
        display: 'flex',
        height: '35px',
        width: '35px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }}  >
        <a href={""}>
        <FontAwesomeIcon icon={faFacebookF} />
        </a>
    </li>
</ul>
</div>
</div>
    );
};