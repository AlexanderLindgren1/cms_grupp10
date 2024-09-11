"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/nestable/Imagewithtext";
import Imagewithtext from "@/components/nestable/Imagewithtext";
import Latestproducts from "@/components/nestable/LatestProductslist";
import Searchbar from "@/components/nestable/Searchbar";
import Imagebanner from "@/components/nestable/Imagebanner";

const components = {
  "header": Header,
  "footer": Footer,
  "page": Page,
  "hero":Hero,
  "imagebanner":Imagebanner,
  "imagewithtext":Imagewithtext,
  "latestproducts":Latestproducts,
  "searchbar":Searchbar,

}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}