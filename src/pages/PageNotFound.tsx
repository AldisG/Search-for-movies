import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="error-while-fetching-data">
    <h1>
      ERROR 404
    </h1>
    <p>Seems like you entered a page that doesn&apos;t exist!</p>
    <Link to='/'>Go Back</Link>
  </div>
);

export default PageNotFound;
