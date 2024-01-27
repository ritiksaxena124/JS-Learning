import Card from "../Card";
import { useRef } from "react";
function Foreground() {
    const ref = useRef(null);
    return (
        <div className="w-full h-screen absolute flex gap-5 flex-wrap top-0 p-16 overflow-hidden">
            <Card reference = {ref}/>
            <Card reference = {ref}/>
            <Card reference = {ref}/>
            <Card reference = {ref}/>
            <Card reference = {ref}/>
            <Card reference = {ref}/>
            <Card reference = {ref}/>
        </div>
    )
}

export default Foreground;