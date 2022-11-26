import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorAnimation from '../../assets/others/404-page.gif';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex items-center h-full sm:p-0">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img className="w-full -mb-10" src={errorAnimation} alt="404" />
        <p className="font-medium text-2xl mt-0">
          <em>{error.statusText || error.message}</em>
        </p>
        <Link to="/" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-primary dark:text-white">Back to homepage</Link>
      </div>
    </section>
  );
};

export default ErrorPage;