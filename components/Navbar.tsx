import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-700">
          ReciclAqui
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-green-600">
            Home
          </Link>
          <Link href="/perfil" className="text-gray-600 hover:text-green-600">
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}