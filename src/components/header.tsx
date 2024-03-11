import { Bell, CaretDown, ChatCircleDots, List, Plus } from "@phosphor-icons/react";

interface HeaderProps {
  logo: string;
}

export function HeaderComponents({ logo }: HeaderProps) {
  return (
    <header className="py-16 bg-header-bg max-md:justify-between align-center flex justify-around">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <h1 className="font-bold">Pinboard</h1>
      </div>

      <div className="flex max-md:hidden justify-between items-center">
        <ul className="flex text-sm items-center gap-9">
          <li className="font-extralight hover:font-normal transition-all cursor-pointer">
            Vectors
          </li>
          <li className="font-extralight hover:font-normal transition-all cursor-pointer">
            Photos
          </li>
          <li className="font-extralight hover:font-normal transition-all cursor-pointer">
            All Image
          </li>
          <li className="font-extralight hover:font-normal transition-all cursor-pointer">
            Videos
          </li>
          <li className="font-extralight hover:font-normal transition-all cursor-pointer">
            PSD
          </li>
          <li className="flex  items-center font-extralight duration-300 group hover:font-normal transition-all cursor-pointer">
            Categories
             <CaretDown weight="fill" className="transform rotate-180 duration-300 group-hover:rotate-3" />
          </li>
          <li className="flex  items-center font-extralight duration-300 group hover:font-normal transition-all cursor-pointer">
            More
             <CaretDown weight="fill" className="transform rotate-180 duration-300 group-hover:rotate-3" />
          </li>
        </ul>

        <div className="flex items-center gap-6 ml-[86px]">
          <div className="flex gap-3">
            <div className="relative">
              <div className="p-[1.5px] top-1 right-1 bg-header-bg absolute rounded-full ">
                <div className="w-2 h-2 bg-button-bg rounded-full" />
              </div>
              <Bell size={32} weight="fill" className="text-icons-color" />
            </div>
            <div className="relative">
              <div className="p-[1.5px] top-1 right-1 bg-header-bg absolute rounded-full ">
                <div className="w-2 h-2 bg-button-bg rounded-full" />
              </div>
              <ChatCircleDots
                size={32}
                weight="fill"
                className="text-icons-color"
              />
            </div>
          </div>

          <button className="px-4 py-3 bg-button-bg text-white flex gap-3 items-center justify-center rounded-lg">
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

      <div className="hidden items-center max-md:flex">
        <List weight="bold" size={32} />
      </div>
    </header>
  );
}
