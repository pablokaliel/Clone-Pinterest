import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  fetchImages: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  noImagesMessage: string;
}

const SearchComponents: React.FC<SearchBarProps> = ({ query, setQuery, fetchImages, handleSubmit, noImagesMessage }: SearchBarProps) => {
  return (
    <div>
      <div className="flex h-full items-center flex-col max-md:text-center justify-center">
        <div className="text-title-color gap-1 text-[96px] max-md:text-[40px] flex items-center">
          <h1 className="text-black flex items-center">Expand </h1>
          Your Mind
        </div>
        <span className="text-3xl max-md:xl font-extralight">
          Discover your favorite images
        </span>
        <div className="mt-14 max-md:w-full max-md:h-[40px] flex w-[764px] h-[61px]">
          <input
            value={query}
            onChange={async (e) => {
              setQuery(e.target.value);
              if (e.target.value === "") {
                await fetchImages();
              }
            }}
            type="text"
            placeholder="Search here..."
            className="w-full px-4 outline-none h-full rounded-s-md"
          />
          <button
            onClick={handleSubmit}
            className="px-5 py-3 flex items-center justify-center bg-button-bg rounded-e-md"
          >
            <MagnifyingGlass
              color="white"
              className="w-[30px] h-[30px] max-md:w-[20px]"
            />
          </button>
        </div>
        {noImagesMessage && <p>{noImagesMessage}</p>}
      </div>

      <div className="flex items-center justify-center mt-[105px] gap-[50px] max-md:gap-4 max-md:w-full max-md:overflow-scroll">
        <div className="text-center mb-[110px]">
          <div className="mb-2 w-[208px] border border-border-color h-[110px] max-md:h-[80px] max-md:w-[100px] rounded-md bg-white p-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://source.unsplash.com/random/?forest"
              alt=""
            />
          </div>
          <span>Image the forest</span>
        </div>
        <div className="text-center mb-[110px]">
          <div className="mb-2 w-[208px] border border-border-color h-[110px] max-md:h-[80px] max-md:w-[100px] rounded-md bg-white p-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://source.unsplash.com/random/?city,night"
              alt=""
            />
          </div>
          <span>Image The Night City</span>
        </div>
        <div className="text-center mb-[110px]">
          <div className="mb-2 w-[208px] border border-border-color h-[110px] max-md:h-[80px] max-md:w-[100px] rounded-md bg-white p-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://source.unsplash.com/random/?abstract"
              alt=""
            />
          </div>
          <span>Image Abstract</span>
        </div>
        <div className="text-center mb-[110px]">
          <div className="mb-2 w-[208px] border border-border-color h-[110px] max-md:h-[80px] max-md:w-[100px] rounded-md bg-white p-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://source.unsplash.com/random/?universe"
              alt=""
            />
          </div>
          <span>Image The Universe</span>
        </div>

        <div className="text-center mb-[110px]">
          <div className="mb-2 w-[208px] border border-border-color h-[110px] max-md:h-[80px] max-md:w-[100px] rounded-md bg-white p-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://source.unsplash.com/random/?ice"
              alt=""
            />
          </div>
          <span>Ice Image</span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponents;
