import FileInput from "../components/FileInput";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site="FMRNZKZQ"
          defer
        ></script>
        <title>Base64 file and image size calculator</title>
        <meta
          name="description"
          content="How do I calculate a file size when it is Base64-encoded? What is Base64 encoding? WTF?"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

      <main className="container max-w-prose mx-auto px-8 py-16">
        <div className="prose">
          <h1 className="text-3xl font-bold">Base64 WTF</h1>
          <p>
            Each Base64 digit represents exactly 6 bits of data. So, three
            8-bits bytes of the input string/binary file (3×8 bits = 24 bits)
            can be represented by four 6-bit Base64 digits (4×6 = 24 bits).
            &mdash;{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/Base64">
              MDN
            </a>
          </p>

          <h2>WTF? Calculate the Base64 file size for me.</h2>
        </div>

        <FileInput />
      </main>

      <footer className="container max-w-prose mx-auto my-4 prose text-center border-top">
        Created by <a href="https://twitter.com/sawyerh">@sawyerh</a>.{" "}
        <a href="https://github.com/sawyerh/base64-wtf">Contribute</a>
      </footer>
    </>
  );
}
