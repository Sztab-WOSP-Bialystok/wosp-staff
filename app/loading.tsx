import { Spinner } from "./bootstrap";


export default function Page() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "95vh",
      }}
    >
      <Spinner variant="primary" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
