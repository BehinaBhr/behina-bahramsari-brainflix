import "./FormError.scss";

function FormError({ message }) {
    return (
      <div className="form-error">
        <div className="form-error__box">
          <p>{message}</p>
        </div>
      </div>
    );
  }
  
  export default FormError;