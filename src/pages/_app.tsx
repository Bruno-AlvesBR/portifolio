import "@/presentation/styles/globals.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";

import type { AppProps } from "next/app";
import { NextPage } from "next";

import { Header } from "@/presentation/components/core/Header";

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Header />
    <Component {...pageProps} />
  </>
);

export default App;
