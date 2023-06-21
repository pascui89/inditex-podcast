import { useRouteError } from 'react-router-dom';

/**
 * Component for displaying an error page.
 * It retrieves the error information from the route using the `useRouteError` hook.
 */
export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
