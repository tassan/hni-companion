import {ControlsContainer} from "@/components/Controls/styles";
import Link from "next/link";


const Characters = () => {
    return (
        <>
            <Link href={"/characters"}>Characters</Link>
        </>
    )
}

export default function Controls() {
    return (
        <ControlsContainer>
            <div>

            </div>
        </ControlsContainer>
    )
}