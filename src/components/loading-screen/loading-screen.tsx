import "./loading-screen.scss"
import { PuffLoader } from "react-spinners"

export function LoadingScreen() {

    return (
        <div className="loading-screen flex flex-row items-center justify-center">
            <PuffLoader color="#92252b" loading></PuffLoader>
        </div>
    )
}