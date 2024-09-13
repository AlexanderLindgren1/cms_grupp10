"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/nestable/Hero";
import Imagewithtext from "@/components/nestable/Imagewithtext";
import Searchbar from "@/components/nestable/Searchbar";
import Imagebanner from "@/components/nestable/Imagebanner";
import Abouthero from "@/components/nestable/abouthero";
import ProductPage from "@/components/content-types/ProductPage";
import Image from "@/components/nestable/Image";
import Productlist from "@/components/nestable/Productlist";
import LastestProductsList from "@/components/nestable/LastestProductsList";
import Lates from "@/components/nestable/Lates";


const components = {
  "header": Header,
  "footer": Footer,
  "page": Page,
  "hero": Hero,
  "imagebanner": Imagebanner,
  "imagewithtext": Imagewithtext,
  "searchbar": Searchbar,
  "abouthero": Abouthero,
  "productpage": ProductPage,
  "image": Image,
  "productlist": Productlist,
  "lastestproductslist": LastestProductsList,
  "lates": Lates
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
