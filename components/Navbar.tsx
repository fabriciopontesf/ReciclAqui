import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-transparent mb-8">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo2.png" // certifique-se que está em public/logo.png
            alt="ReciclAqui Logo"
            width={80}
            height={80}
            priority
          />
        </Link>

        {/* Menu */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-neutral-200 hover:text-[#7ed957] transition"
          >
            Home
          </Link>
          <Link
            href="/perfil"
            className="text-neutral-200 hover:text-[#7ed957] transition"
          >
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}