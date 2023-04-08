import Navigation from "./navigation";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>A Sip of Paradise Garden</title>
        <meta
          name="description"
          content="A Sip of Paradise Garden provides horticultural therapy, employment resources, and health and wellness programs for bartenders and the greater hospitality community to recharge their minds, bodies and spirits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="flex justify-center h-full">
        <main className="w-full max-w-[1440px]">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
