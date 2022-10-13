// import "../styles/tailwind.css";
import React, { Fragment } from 'react';
import { ProviderAuth } from '@hook/useAuth';
import MainLayout from '@layout/MainLayout';
import "../../node_modules/tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </Fragment>
  )
}

export default MyApp
