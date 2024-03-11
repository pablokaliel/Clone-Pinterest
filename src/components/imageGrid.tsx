import { DotsThree, DownloadSimple } from "@phosphor-icons/react";

interface Photo {
  urls: {
    regular: string;
  };
}

interface ImageGridProps {
  photos: Photo[];
}

function ImageGrid({ photos }: ImageGridProps) {
  return (
    <div className="px-[102px] bg-white max-md:px-4">
      <div className="mt-4 columns-5 max-md:columns-2">
        {photos.map((image, index) => (
          <div key={index} className="mb-4 group overflow-hidden relative">
            <img
              src={image.urls.regular}
              alt="Image"
              className="w-full group-hover:brightness-50 transition-all duration-200 h-full rounded-md object-cover "
              loading="lazy"
            />
            <div className="absolute -translate-y-[500px] group-hover:-translate-y-[0px] transition-transform duration-200 right-2 top-2 z-10">
              <button className="px-3 py-2 bg-button-bg text-white flex gap-3 items-center justify-center rounded-full">
                Salvar
              </button>
            </div>

            <div className="absolute flex gap-2 bottom-2 right-2 z-10 translate-x-[500px] group-hover:translate-x-[0px] transition-transform duration-200 ">
              <button className="px-2 py-2 bg-white hover:bg-white/70 transition-all duration-200 text-black flex items-center justify-center rounded-full">
                <DownloadSimple />
              </button>
              <button className="px-2 py-2 bg-white hover:bg-white/70 transition-all duration-200 text-black flex items-center justify-center rounded-full">
                <DotsThree />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
