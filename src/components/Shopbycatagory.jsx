import React from "react";
import { Link } from "react-router";

const Shopbycatagory = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="group relative h-[480px] w-[300px] overflow-hidden rounded-lg shadow-md border border-gray-200 bg-cover bg-center bg-[url('https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/kids-540x840.jpg')]">
        <div className="absolute inset-0 flex items-end justify-center ">
          <Link
            href="#"
            className="mb-6 px-12 py-2.5 bg-white text-black text-sm font-bold rounded-md"
          >
            Kids
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative h-[480px] w-[300px] overflow-hidden rounded-lg shadow-md border border-gray-200 bg-cover bg-center bg-[url('https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/Group-3628-1-540x840.jpg')]">
        <div className="absolute inset-0 flex items-end justify-center">
          <Link
            href="#"
            className="mb-6 px-12 py-2.5 bg-white text-black text-sm font-bold rounded-md"
          >
            Mens
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative h-[480px] w-[300px] overflow-hidden rounded-lg shadow-md border border-gray-200 bg-cover bg-center bg-[url('https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/shirts-1-540x840.jpg')]">
        <div className="absolute inset-0 flex items-end justify-center">
          <Link
            href="#"
            className="mb-6 px-12 py-2.5 bg-white text-black text-sm font-bold rounded-md"
          >
            Shirts
          </Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group relative h-[480px] w-[300px] overflow-hidden rounded-lg shadow-md border border-gray-200 bg-cover bg-center bg-[url('https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/04/Mask-Group-2-1-540x840.jpg')]">
        <div className="absolute inset-0 flex items-end justify-center">
          <Link
            href="#"
            className="mb-6 px-12 py-2.5 bg-white text-black text-sm font-bold rounded-md"
          >
            Skirts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shopbycatagory;
