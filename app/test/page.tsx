"use client"
export default function ErrorPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 max-w-sm mx-auto rounded-xl">
        <h1 className="text-2xl font-bold">404</h1>
        <p className="text-gray-500">We're sorry, the page you requested could not be found.</p>
      </div>
    </div>
  );
}
