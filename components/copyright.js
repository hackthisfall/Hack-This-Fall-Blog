import Container from "./container";

export default function Copyright() {
  return (
    <div className={"border-b  font-poppins font-medium"}>
      <Container>
        <div className="py-2 text-center text-sm">
          © {new Date().getFullYear()}, Hack This Fall. All rights reserved.
        </div>
      </Container>
    </div>
  );
}
