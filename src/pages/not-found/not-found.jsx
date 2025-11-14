export const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-2">Sahifa topilmadi</p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Bosh sahifaga qaytish
        </a>
      </div>
    );
  };
  