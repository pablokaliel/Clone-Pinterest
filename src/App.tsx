import logo from "./assets/logo.svg";
import { useEffect, useState } from "react";
import { HeaderComponents } from "./components/header";
import SearchComponents from "./components/searchBar";
import ImageGrid from "./components/imageGrid";

const ACCESS_KEY = "U8Bxt5JZkkxsMaYHIEBwGhsZCOnwoL_gOv8br_pKS9U";

const clientID = `?client_id=${ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  const [photos, setPhotos] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");

  const [noImagesMessage, setNoImagesMessage] = useState("");

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >=
          (document.documentElement.scrollHeight ||
            document.body.scrollHeight) -
            2
      ) {
        setPage((oldPage) => oldPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    if (query === "") {
      setPhotos([]);
      setPage(0);
    }
  }, [query]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query !== "") {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (query === "" && data.results) {
        return setPhotos(data.results);
      }

      if (data.results && data.results.length === 0) {
        setNoImagesMessage("No images found. Please redo your search again.");
      } else {
        setNoImagesMessage("");
        setPhotos((oldPhotos) => {
          if (query && page === 1) {
            return data.results;
          } else if (query) {
            return [...oldPhotos, ...data.results];
          } else {
            return [...oldPhotos, ...data];
          }
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div>
      <div className="bg-header-bg max-md:px-2 flex flex-col justify-center">
        <HeaderComponents logo={logo} />

        <SearchComponents
          query={query}
          setQuery={setQuery}
          fetchImages={fetchImages}
          handleSubmit={handleSubmit}
          noImagesMessage={noImagesMessage}
        />

        <ImageGrid photos={photos} />
      </div>
    </div>
  );
}

export default App;
