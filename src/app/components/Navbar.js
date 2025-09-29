// components/Navbar.js
import Link from "next/link";

export default function Navbar({ t, lang }) {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      {/* <h1 className="text-xl font-bold">{t.home.title}</h1> */}
      <ul className="flex gap-6">
        {/* <li><Link href={`/${lang}`}>{t.nav.home}</Link></li>
        <li><Link href={`/${lang}/gallery`}>{t.nav.gallery}</Link></li>
        <li><Link href={`/${lang}/about`}>{t.nav.about}</Link></li>
        */}
        <li><Link href={`/Services`}>Services</Link></li> 
        <li><Link href={`/`}>Home</Link></li> 
     </ul>
    </nav>
  );
}

