import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Narayani Auto </h1>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/suzuki" passHref legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Suzuki
          </a>
        </Link>
        <Link href="/tvs" passHref legacyBehavior>
          <a className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            TVS
          </a>
        </Link>
      </div>
    </main>
  );
}
