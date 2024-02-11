import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          {/* <img
            alt="REG-IMG"
            className="hidden xl:block w-1/2 h-screen object-cover bg-no-repeat"
            src="../../public/assets/"
          /> */}
        </>
      )}
    </>
  );
};

export default AuthLayout;
