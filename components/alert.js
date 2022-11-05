import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "@/lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      className={
        "border-b bg-accent-1 border-accent-1 text-white font-poppins font-medium"
      }
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              Pre-Registrations have begun! Visit{" "}
              <a
                href={`https://hackthisfall.tech`}
                target="_blank"
                className="underline hover:text-success text-orange duration-200 transition-colors"
              >
                hackthisfall.tech
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
