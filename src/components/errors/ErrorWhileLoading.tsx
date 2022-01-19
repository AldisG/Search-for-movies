import GoBackBtn from '../tools/buttons/GoBackBtn';
import './error.scss'

const ErrorWhileLoading = () => {
  return (
    <div className="error-while-fetching-data">
      <h1>ERROR while fetching shows from the database</h1>
      <p>Make sure your internet connection is active and try refreshing page!
        <br />
        <small>{`Also dont tinker with the link. ;)!`}</small>
      </p>

      <GoBackBtn text="Back to search" />
    </div>
  );
}

export default ErrorWhileLoading
