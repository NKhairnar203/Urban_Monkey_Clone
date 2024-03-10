import "./Error.css";
const ErrorMessage = ({ fname, lname, email, password }) => {
  return (
    <div className="error-message">
      <span>{fname}</span>
      <span>{lname}</span> 
      <span>{email}</span>
      <span>{password}</span>
    </div>
  );
};
export default ErrorMessage;
