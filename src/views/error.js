import { useRouteError } from "react-router-dom";
import logo from "../assets/logo.png";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='min-h-full pt-16 pb-12 flex flex-col bg-white'>
      <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex-shrink-0 flex justify-center'>
          <a href='/' className='inline-flex'>
            <img className='errorlogo w-auto' src={logo} alt='' />
          </a>
        </div>
        <div className='py-16'>
          <div className='text-center'>
            <p className='text-sm font-semibold font-design uppercase tracking-wide'>
              404 error
            </p>
            <h1 className='mt-2 text-4xl font-extrabold text-black font-design tracking-tight sm:text-5xl'>
              Oops! Where are you going?
            </h1>
            <p className='mt-2 text-base text-gray-500'>
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className='mt-6'>
              <a
                href='/'
                className='text-base font-medium text-indigo-600 hover:text-indigo-500'
              >
                Head home<span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}