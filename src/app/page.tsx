import ProductListing from './_components/product-listing';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Serein Store</h1>
        <p className="text-lg text-gray-600">
          Discover curated minimal fashion & lifestyle picks
        </p>
      </section>

      <ProductListing />
    </main>
  );
}
