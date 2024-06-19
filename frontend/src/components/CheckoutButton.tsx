import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import LoadingButton from "./LoadingButton";

type Props = {};

const CheckoutButton = ({}: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const pathname = useLocation();

  const onLogin = () => {
    loginWithRedirect({
      appState: { returnTo: pathname.pathname },
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="mt-8 space-y-2">
        <button
          onClick={onLogin}
          type="button"
          className="mb-4 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Login to Checkout
        </button>
        <Link to="/" className="">
          <button
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
          >
            Explore More Restaurants
          </button>
        </Link>
      </div>
    );
  }

  if (isAuthLoading) {
    return <LoadingButton />;
  }

  return (
    <>
      <div className="mt-8 space-y-2">
        <button
          type="button"
          className="mb-4 text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
        >
          Go To Checkout
        </button>
        <Link to="/" className="">
          <button
            type="button"
            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-md"
          >
            Explore More Restaurants
          </button>
        </Link>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <img
          src="https://readymadeui.com/images/master.webp"
          alt="card1"
          className="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/visa.webp"
          alt="card2"
          className="w-10 object-contain"
        />
        <img
          src="https://readymadeui.com/images/american-express.webp"
          alt="card3"
          className="w-10 object-contain"
        />
      </div>
    </>
  );
};

export default CheckoutButton;