import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/Appbar/Appbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} theme={"light"} icon={false} style={{ fontSize: "16px" }}/>
    </Wrapper>
  );
};