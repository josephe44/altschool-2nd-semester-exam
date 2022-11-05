import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SafeComponent } from "../components";

function ErrorPage() {
  return (
    <div className="error">
      <h1>Implementation of ErrorBoundary</h1>
      <ErrorBoundary FallbackComponent={SafeComponent}>
        <Error />
      </ErrorBoundary>
    </div>
  );
}

function Error() {
  throw new Error("Error");
}

export default ErrorPage;
