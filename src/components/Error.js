import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <div className="error">
            <h1>Oops!</h1>
            <h2>Something went wrong.</h2>
            <p>Please try again later.</p>
            <h3>{err.status} - {err.statusText}</h3>
            <p>{err.data}</p>
            <p>{err.message}</p>
        </div>
    )
}

export default Error;