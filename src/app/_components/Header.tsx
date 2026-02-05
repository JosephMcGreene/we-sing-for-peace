import localFont from "next/font/local";

const lalezarFont = localFont({
  src: "../../../public/Lalezar-Regular-webfont.woff",
});
export default function Header() {
  return (
    <header className="w-full py-6 bg-blue-100 dark:bg-blue-900 text-center shadow">
      {" "}
      <h1
        className={`${lalezarFont.className} text-5xl font-bold text-blue-900 dark:text-blue-100`}
      >
        We Sing for Peace
      </h1>
    </header>
  );
}
