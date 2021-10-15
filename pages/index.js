import Head from "next/head";

// components
import Dashboard from "../components/views/Student/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Head>
        <title>NROLL</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Not your conventional student-mentorship platform."
        />
        <meta
          name="keywords"
          content="school, university, colleges, studnets, mentors, classes, courses, lessons, video, chat, help need, school work, course work, teachers"
        />
        <meta name="author" content="APIFellas - Incredible 4" />
        <meta name="theme" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
          integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Fonts */}

        {/* Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />

        {/* Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="h-auto w-full">
        <Dashboard />
      </main>
    </div>
  );
}
