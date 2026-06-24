function Hero() {
  return (
    <>
      <div className="bg-[#f6f6f4]" h-200>
        <div className=" flex h-full justify-center items-center">
          <div className=" flex flex-col w-225 text-center gap-y-5  pt-12">
            <div className=" text-[#014732] font-semibold">
              <span className="py-1 px-3 bg-white rounded-full text-xs">
                CREATE FOR FAST
              </span>
            </div>
            <div className=" text-7xl text-[#033227] font-bold">
              One tool to manage contracts and your team
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <div className=" flex gap-4 justify-center">
              <button className=" px-6 py-4 bg-[#00493a] text-[#cfee85] rounded-2xl">
                Start for Free
              </button>
              <button className=" px-6 py-4 bg-white text-[#00493a] font-semibold rounded-2xl">
                Get Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

{
  /*     <>
        <div className="bg-blue-50 h-50">
            This is hero section
        </div> 
        h is height

         <>
        <div className="bg-blue-50 h-125 text-9xl">
            HERO
        </div>
        </>

        with out flax you add justify- it wont workkk
        left to right is justify
        top to bottom is items-center

        <>
        <div className="bg-blue-50 h-125 text-9xl">
            <div className="flex h-full justify-center items-center">HERO</div>
        </div>
        </>
        */
}
