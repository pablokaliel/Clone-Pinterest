

const ACCESS_KEY = "U8Bxt5JZkkxsMaYHIEBwGhsZCOnwoL_gOv8br_pKS9U";
const COUNT = 78;

interface UnsplashImage {
  urls: {
    regular: string;
  };
}

export const fetchRandomImages = async (): Promise<string[]> => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=${COUNT}`
    );
    const data: UnsplashImage[] = await response.json();
    const imageUrls: string[] = data.map(photo => photo.urls.regular);
    return imageUrls;
  } catch (error) {
    console.error('Erro ao obter imagens:', error);
    return [];
  }
};
