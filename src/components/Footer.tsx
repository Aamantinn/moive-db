export const Footer = () => {
  return (
    <div className="bg-neutral-50 ">
      <div className=" w-full text-white py-10 px-10 ">
        <div className="text-center w-full  border-t-2 border-neutral-400">
          <div className="flex justify-center w-full gap-8 my-10">
            <div className="flex items-start w-full ">
              <div className="text-left md:w-1/2 md:px-10 ">
                <p className=" pb-5 text-2xl text-black">
                  <span className="font-bold ">Movie App / </span>{" "}
                  <span className="italic">by Coding-School</span>
                </p>
                <p className="text-xs  text-semibold text-neutral-400 flex flex-col gap-2">
                  <span>created in 2024 / January </span>
                  <span>
                    Created with: The OMDb API is a RESTful web service to
                    obtain movie information, all content and images on the site
                    are contributed and maintained by our users. More infos on
                    the API you can find here - <span className="text-blue-500">https://www.omdbapi.com/</span>
                  </span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};
