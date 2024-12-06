
export default function BottomNavigationBar() {
  return (
    <div className="block md:hidden">
        <span style={{ fontSize: 0 }} />
        <div
          className="w-full p-4 md:h-auto bg-white bottom-0 fixed z-50 left-0 right-0 mx-md:drop-shadow-[0_-3px_15px_rgba(0,0,0,0.20)] animate-fadeIn"
          id="variant"
        >
          <div className="relative md:static ">
            <div>
              <div className="flex flex-col w-full">
                <div>
                  <div className="flex items-center justify-between md:flex-col md:items-start">
                    <div className="md:mb-3">
                      <div className="inline-block text-2xl font-semibold">
                        ৳8500
                      </div>
                      <span className="infline-flex">
                        <del className="ml-2 text-base font-normal md:text-xl">
                          ৳10000
                        </del>
                        <div className="c-Tukmu inline-block">
                          <p className="card-price">1500 ৳ ছাড়</p>
                        </div>
                      </span>
                      <p className="text-xs font-normal text-gray-500 md:text-base">
                        ব্যাচ ১০: ৬ জানুয়ারি, ২০২৫ - মার্চ ১৯, ২০২৫
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2" />
                </div>
                <button className=" bg-green whitespace-nowrap button primary text-center md:w-full centered-buttons">
                  কোর্সটি কিনুন
                </button>
              </div>
            </div>
            <div className="absolute md:static top-[-45px] left-0 ">
              <p className="hidden md:block text-base text-[#F3764E] py-4">
                ১০ম ব্যাচের ভর্তি শেষ হবে:৬ জানুয়ারী, ২০২৫
              </p>
              <p className="md:hidden text-xs text-white bg-[#DA4C5A] p-2 rounded-full">
                ১০ম ব্যাচের ভর্তি শেষ হবে: 31:16:3:0
              </p>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
  )
}
