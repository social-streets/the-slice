import { json } from "@sveltejs/kit";

const ADS = {
  banner: {
    name: "Gold's Electronics",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Vintage_Newspaper_Advertising_For_The_Keystone_8mm_Turret_Movie_Camera_%28Model_K-27%29_In_The_Lincoln_Nebraska_Evening_Journal%2C_April_29%2C_1958_%2822850805486%29.jpg/1024px-Vintage_Newspaper_Advertising_For_The_Keystone_8mm_Turret_Movie_Camera_%28Model_K-27%29_In_The_Lincoln_Nebraska_Evening_Journal%2C_April_29%2C_1958_%2822850805486%29.jpg",
    url: "https://acme.com",
  },
  sideA: {
    name: "Synthetic Scents",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Piesse_%26_Lubin_Perfume_Advertisement_1897.tif/lossy-page1-526px-Piesse_%26_Lubin_Perfume_Advertisement_1897.tif.jpg",
    url: "https://acme.com",
  },
  sideB: {
    name: "Eclarte",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Eclarte_advertisement_Sydney_Morning_Herald.png",
    url: "https://acme.com",
  },
};

export async function GET() {
  return json(ADS);
}
