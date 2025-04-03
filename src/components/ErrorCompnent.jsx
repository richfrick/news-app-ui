const ErrorComponent = ({ error }) => {
  const {
    response: {
      status,
      data: { msg },
    },
  } = error;
  return (
    <div>
      <h1>Error {status}</h1>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorComponent;
