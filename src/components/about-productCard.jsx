export const AboutProductCard = ({ img, title }) => {
    return (
      <div
        className="bg-white rounded-[30px] shadow-lg 
                   flex flex-col items-center pb-6
                   w-56 md:w-64"
      >
        {/* Rasm uchun Figma’dagidek fonli quti */}
        <div
          className="w-full flex justify-center items-center 
                     bg-[#F9F8F8] rounded-t-[30px] 
                     h-52"
        >
          <img
            src={img}
            alt={title}
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
  
        {/* Pastki label */}
        <h3 className="text-[#274C5B] text-xl font-semibold mt-6">
          {title}
        </h3>
      </div>
    );
  };
  