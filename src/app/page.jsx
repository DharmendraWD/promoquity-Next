import Image from "next/image";
import { HiH1 } from "react-icons/hi2";
import Page from "./(home)/page";
import MultiCarousel from "./(home)/components/MultiCarousal";
import FAQ from "@/components/utilities/faq/FAQ";
import FirstThreeBlogs from "@/components/utilities/blogs/FirstThreeBlogs";
import TeamSupport from "./(home)/components/TeamSupport";
import LowTicket from "./(home)/components/LowTicket";
import AboveFooter from "@/components/utilities/footer/AboveFooter";
import Footer from "@/components/utilities/footer/Footer";
export default function Home() {
  return (
   <div className="mx-auto">
   <Page></Page>
   </div>
  );
}
