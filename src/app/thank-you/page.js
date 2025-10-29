import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-center font-sans p-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">
       Thank You!
      </h1>
      <p className="text-xl text-blue-800 mb-8 max-w-lg">
        We appreciate you contacting us. Our team will get back to you as soon as possible.
      </p>

      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg text-lg transition-all duration-300 transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
