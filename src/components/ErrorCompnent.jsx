const ErrorComponent = ({ error }) => {
  const {
    response: {
      status,
      data: { msg },
    },
  } = error;
  return (
    <section role="alert">
      <h1>Error {status}</h1>
      <p>{msg}</p>
    </section>
  );
};

export default ErrorComponent;
