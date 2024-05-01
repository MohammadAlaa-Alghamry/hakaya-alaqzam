'use client';


export default function Page() {
    return (
        // <main className="h-full w-[1440px] max-w-[1440px] min-w-[1440px] aspect-[3/3]">
        //  <main className="h-full w-[1920px] max-w-[1920px]">
        <div className="w-full h-full flex flex-col justify-center items-center">


  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="customStyle">
    <input type="checkbox"
      className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-[#7F8341] bg-[#E9DFC8] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:[border-[#7F8341]] checked:bg-[#7F8341] checked:before:bg-[#7F8341] hover:scale-105 hover:before:opacity-0"
      id="customStyle"  />
    <span
      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
        stroke="currentColor" stroke-width="1">
        <path fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"></path>
      </svg>
    </span>
  </label>

        </div>
    );
}
