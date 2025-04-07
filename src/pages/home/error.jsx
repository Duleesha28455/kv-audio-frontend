import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link className="bg-orange-400 p-1 " to="/">Go back to Home</Link>
        </div>
        );
}