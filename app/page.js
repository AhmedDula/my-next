import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function dula() {
    return (
        <div style={{display:'flex' ,height:'100dvh', justifyContent:'center' , alignItems:'center'}}>
            <Link href='/dula'>To Dula</Link>
        </div>
    )
}
