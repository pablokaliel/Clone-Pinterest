import { Bell, CaretDown, ChatCircleDots, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import logo from "./assets/logo.svg";
import ImageGrid from "./components/imageGrid";
import { useEffect, useRef, useState } from "react";
import { fetchRandomImages } from "./utils/unplashService";

function App() {

  const [images, setImages] = useState<string[]>([]);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadImages = async () => {
      const newImages = await fetchRandomImages(10); // Carrega 10 imagens de uma vez
      setImages(prevImages => [...prevImages, ...newImages]);
      setLoadedImagesCount(prevCount => prevCount + 10);
    };

    const handleScroll = () => {
      if (
        loaderRef.current &&
        window.innerHeight + window.scrollY >= loaderRef.current.offsetTop
      ) {
        loadImages();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadedImagesCount]);

  return (
    <div>
      <div className="bg-[#FAE3E3] flex flex-col justify-center">
        <header className="py-16 flex justify-around">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <h1 className="font-bold">Pinterest</h1>
          </div>
          <div className="flex justify-between items-center">
            <ul className="flex font-extralight text-sm items-center gap-9">
              <li>Vectors</li>
              <li>Photos</li>
              <li>All Image</li>
              <li>Videos</li>
              <li>PSD</li>
              <li className="flex items-center">
                Categories
                <CaretDown />
              </li>
              <li className="flex items-center">
                More
                <CaretDown />
              </li>
            </ul>
            <div className="flex items-center gap-6 ml-[86px]">
              <div className="flex gap-3">
                <div className="relative">
                  <div className="p-[1.5px] top-1 right-1 bg-[#fae3e3] absolute rounded-full ">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <Bell size={32} weight="fill" color="#989898" />
                </div>
                <div className="relative">
                  <div className="p-[1.5px] top-1 right-1 bg-[#fae3e3] absolute rounded-full ">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <ChatCircleDots size={32} weight="fill" color="#989898" />
                </div>
              </div>
              <button className="px-4 py-3 bg-[#E60023] text-white flex gap-3 items-center justify-center rounded-lg">
                <Plus weight="bold" size={12} />
                Create
              </button>
              <div className="w-12 h-12 rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src="https://github.com/pablokaliel.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>

        <div className="flex items-center flex-col justify-center">
          <div className="text-[#DA2F2F] gap-1 text-[96px] flex items-center">
            <h1 className="text-black flex items-center">Expand </h1>Your Mind
          </div>
          <span className="text-3xl font-extralight">
            Discover your favorite images
          </span>
          <div className="mt-14 flex w-[764px] h-[61px]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 outline-none h-full rounded-s-md"
            />
            <button className="px-5 py-3 bg-[#DA2F2F] rounded-e-md">
              <MagnifyingGlass color="white" size={30} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[105px] gap-[50px]">
          <div className="text-center mb-[110px]">
            <div className="mb-2 w-[208px] border border-[#F07474] h-[110px] rounded-md  bg-white p-2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://source.unsplash.com/random/?forest"
                alt=""
              />
            </div>
            <span>Image the florest</span>
          </div>
          <div className="text-center mb-[110px]">
            <div className="mb-2 w-[208px] border border-[#F07474] h-[110px] rounded-md  bg-white p-2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://source.unsplash.com/random/?city,night"
                alt=""
              />
            </div>
            <span>Image The Night City</span>
          </div>
          <div className="text-center mb-[110px]">
            <div className="mb-2 w-[208px] border border-[#F07474] h-[110px] rounded-md  bg-white p-2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://source.unsplash.com/random/?abstract"
                alt=""
              />
            </div>
            <span>Image Abstract</span>
          </div>
          <div className="text-center mb-[110px]">
            <div className="mb-2 w-[208px] border border-[#F07474] h-[110px] rounded-md  bg-white p-2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://source.unsplash.com/random/?universe"
                alt=""
              />
            </div>
            <span>Image The Universe</span>
          </div>
          
          <div className="text-center mb-[110px]">
            <div className="mb-2 w-[208px] border border-[#F07474] h-[110px] rounded-md  bg-white p-2">
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

      <div className="px-[102px]">
      <ImageGrid images={images.map((url, index) => ({ url, alt: `Imagem ${index}`, description: '' }))} />
      <div ref={loaderRef}></div>
      </div>
    </div>
  );
}

export default App;
