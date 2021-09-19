import type { AppProps } from "next/app";
import Props from "../Interface";
import "../styles/index.css";
import GlobalContext from "../components/GlobalContext";

function SafeHydrate({ children }: Props) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </GlobalContext>
  );
}

export default MyApp;
