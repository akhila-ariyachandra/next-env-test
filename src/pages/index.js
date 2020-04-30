const Index = () => {
  return (
    <div>
      <h1>{process.env.TEST_ENV}</h1>

      <p>
        You should be seeing the value of the <strong>TEST_ENV</strong>{" "}
        environment variable above.
      </p>
    </div>
  );
};

export default Index;
