export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-auto">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} ReciclAqui. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}