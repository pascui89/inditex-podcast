import {
  Fragment,
  cloneElement,
  useEffect,
  useState,
  Children,
  ReactNode,
} from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorInfo = {
  componentStack: string;
};

function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

  useEffect(() => {
    if (hasError) {
      // Aquí puedes realizar acciones adicionales, como enviar el error a un servicio de seguimiento
    }
  }, [hasError]);

  function handleComponentError(error: Error, errorInfo: ErrorInfo) {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  }

  if (hasError) {
    return (
      <div>
        <h2>Error</h2>
        <p>Something went wrong.</p>
        {/* Puedes personalizar el mensaje de error según tus necesidades */}
        <p>{error && error.toString()}</p>
        <p>{errorInfo && errorInfo.componentStack}</p>
      </div>
    );
  }

  return (
    <Fragment>
      {Children.map(children, (child) => {
        return cloneElement(child as JSX.Element, {
          onError: handleComponentError,
        });
      })}
    </Fragment>
  );
}

export default ErrorBoundary;
