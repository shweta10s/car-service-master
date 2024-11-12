import "@/styles/globals.css";
import { RouterProvider } from "@/context/context";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <RouterProvider>
      <Component {...pageProps} />;
      </RouterProvider>

    </div>
  )
}
