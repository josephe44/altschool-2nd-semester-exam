import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SafeComponent, Pagination } from "../components";

function ErrorPage() {
  return (
    <div className="error">
      <h1>Implementation of ErrorBoundary</h1>
      <ErrorBoundary FallbackComponent={SafeComponent}>
        <Pagination />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorPage;
