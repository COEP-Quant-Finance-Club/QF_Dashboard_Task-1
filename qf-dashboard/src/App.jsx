import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);

    // 🧠 We'll later add CSV parsing + chart logic here
    setTimeout(() => setLoading(false), 2000); // Mock loading
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HEADER */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Quantitative Finance Club 💹
          </h1>
          <span className="text-sm opacity-80">Web & Tech Dashboard</span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          Stock Data Visualization
        </h2>

        <button
          onClick={handleStart}
          disabled={loading}
          className={`px-6 py-3 rounded-lg font-semibold shadow transition-all duration-300 
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
        >
          {loading ? "Loading..." : "Start"}
        </button>

        <div
          id="chart"
          className="w-full max-w-4xl h-[450px] mt-10 bg-white rounded-lg border shadow-sm flex items-center justify-center text-gray-400"
        >
          {loading ? "Preparing chart..." : "Chart will appear here 📈"}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-3 text-sm text-gray-600 border-t">
        © {new Date().getFullYear()} Quantitative Finance Club — COEP
      </footer>
    </div>
  );
}

export default App;
