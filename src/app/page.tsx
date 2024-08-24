import ServerBuildingPage from "@/app/_components/ServerBuildingPage";
import Image from "next/image";

export default function Home() {
    const open = true
    return (
        <main className="home">
            {!open && <ServerBuildingPage/>}
            {open &&
                <div className="wrapper">

                </div>
            }
        </main>
    );
}
