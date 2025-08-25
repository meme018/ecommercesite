import React from "react";
import Shopbycatagory from "../components/shopbycatagory";
import ProductTabs from "../components/ProductTabs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="w-full p-5 flex flex-col  items-center justify-center">
      <div className="w-full max-w-6xl mt-10 cursor-pointer self-start">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#f5e8da] h-[90vh] flex flex-col justify-center items-start px-16">
              <h2 className="text-sm font-semibold uppercase mb-4 text-gray-900">
                Holiday 2022
              </h2>
              <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Men’s New <br /> Arrivals
              </h1>
              <p className="text-lg text-gray-800 mb-8">
                New colors, now also available in men’s sizing
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                View Collection
              </button>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-[#f5e8da] h-[90vh] flex flex-col justify-center items-start px-16">
              <h2 className="text-sm font-semibold uppercase mb-4 text-gray-900">
                New Collection
              </h2>
              <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Luxury Without <br /> Labels
              </h1>
              <p className="text-lg text-gray-800 mb-8">
                Explore new-in products and future best-sellers
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                View Collection
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* product cards
       */}
      <h1 className="text-4xl font-bold self-start ml-45 pt-8">
        Shop By Catagories
      </h1>

      <Shopbycatagory />

      {/* Best seller */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold m-5">Best Seller</h1>
        <ProductTabs />
        <Link to="/ProductListing">
          <button className="text-xl font-bold px-9 py-3 outline-1 outline-stone-700 rounded-xl hover:bg-yellow-600 hover:text-white hover:transition-all hover:ease-in-out">
            Explore More
          </button>
        </Link>
      </div>

      <div className="m-5">
        <div className="group mx-2 mt-10 grid max-w-screen-xl min-h-96 grid-cols-1  overflow-hidden text-gray-700  sm:mx-auto sm:grid-cols-5">
          <div className="col-span-2 text-left text-gray-600 overflow-hidden ">
            <img
              src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2022/05/banner-fashion-01-1.jpg"
              alt=""
              className="h-full w-full border-none object-cover text-gray-700 "
            />
          </div>
          <div className="col-span-3 flex flex-col space-y-3 pr-8 text-left bg-amber-100 justify-center items-center">
            <h1 className="mt-3 overflow-hidden text-2xl font-bold">
              Sale Event
            </h1>
            <h1 className="text-black text-4xl font-bold overflow-hidden text-center">
              Summer Shirt <br /> Limited Offer – $20
            </h1>
            <p>Until 12/27/21. Use code FESTIVE at checkout</p>
            <button className="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-black text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Customer review */}
      <div className="w-full max-w-4xl mt-10 cursor-pointer">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white h-96 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Customer Review
              </h1>
              <p className="text-2xl text-gray-900 italic mb-4 mt-8">
                "As a woman who values health, we're here to do what we do best
                – roll up our sleeves to get it done right."
              </p>
              <p className="text-gray-800 font-semibold mt-8">Randy Workman</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white h-96 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Customer Review
              </h1>
              <p className="text-2xl text-gray-900 italic mb-4 mt-8">
                "As a woman who values health, we're here to do what we do best
                – roll up our sleeves to get it done right."
              </p>
              <p className="text-gray-800 font-semibold mt-8">Randy Workman</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white h-96 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Customer Review
              </h1>
              <p className="text-2xl text-gray-900 italic mb-4 mt-8">
                "As a woman who values health, we're here to do what we do best
                – roll up our sleeves to get it done right."
              </p>
              <p className="text-gray-800 font-semibold mt-8">Randy Workman</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Gallary */}
      <div className="flex flex-row flex-wrap my-15 gap-3">
        <img
          src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2023/03/319924333_1325160244886015_4841041216644686203_n.jpg"
          alt="image"
          className="w-80 h-80"
        />
        <img
          src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2023/03/315933407_520263473287747_8621597629894180495_n.jpg"
          alt="image"
          className="w-80 h-80"
        />
        <img
          src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2023/03/315677823_1362557837481932_6593174319359924998_n.jpg"
          alt="image"
          className="w-80 h-80"
        />
        <img
          src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2023/03/315651559_664154375170355_9186988138166142169_n.jpg"
          alt="image"
          className="w-80 h-80"
        />
        <img
          src="https://july.uxper.co/fashion01/wp-content/uploads/sites/2/2023/03/315683025_171435502151238_5636215533578007924_n.jpg"
          alt="image"
          className="w-80 h-80"
        />
      </div>

      {/* Newsletter */}
      <div class="flex flex-col items-center justify-center py-10 bg-white">
        <h2 class="text-lx font-bold tracking-wider text-black uppercase mb-4">
          NEWSLETTER
        </h2>

        <p class="text-center text-4xl font-bold text-black leading-snug max-w-2xl">
          Sign up and get up to <span class="text-red-600">20% off</span> your
          first purchase
        </p>

        <div class="w-full max-w-xl border-b border-black mt-6 flex items-center justify-between">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-2 py-3 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            class="text-black font-semibold hover:text-red-600 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
