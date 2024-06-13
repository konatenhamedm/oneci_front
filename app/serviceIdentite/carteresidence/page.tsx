import React from 'react'


function page({ params }: { params: { carteresidence :string}}) {
  

  return (
    <><div className="grid grid-cols-6 gap-2 ">
      <div></div>
      <div
        
        className="div h-[8em] w-full col-span-4 bg-white m-auto rounded-[1em] relative group p-2 z-0 overflow-hidden border-2 border-[#ED7F10] cursor-pointer shadow-lg"
      >


        <div className="grid grid-cols-6 ">
          <div className="col-span-6 pl-[7px] ">
            <h1 className="z-20 font-bold font-Poppin text-[1.4em] group-hover:text-white duration-100 mt-[21px]">

            </h1>
          </div>

        </div>
        {/*   <div className="relative flex py-3.5 items-center">
        <div className="flex-grow border-t border-gray-400 group-hover:border-white group-hover:text-white duration-100"></div>
        
        <div className="flex-grow border-t border-gray-400 group-hover:border-white group-hover:text-white duration-100"></div>
      </div> */}
      </div>
      <div></div>
    </div></>
  );
}

export default page