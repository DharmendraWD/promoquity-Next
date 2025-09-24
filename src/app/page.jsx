import Image from "next/image";
import { HiH1 } from "react-icons/hi2";
import Page from "./(Home)/page";
import MultiCarousel from "./(Home)/components/MultiCarousal";
import FAQ from "@/components/utilities/faq/FAQ";
import FirstThreeBlogs from "@/components/utilities/blogs/FirstThreeBlogs";
import TeamSupport from "./(Home)/components/TeamSupport";
import LowTicket from "./(Home)/components/LowTicket";
import AboveFooter from "@/components/utilities/footer/AboveFooter";
import Footer from "@/components/utilities/footer/Footer";
export default function Home() {
  return (
   <div className="mx-auto">
   <Page></Page>
   <MultiCarousel></MultiCarousel>
   <LowTicket></LowTicket>
<TeamSupport></TeamSupport>
   <FAQ ></FAQ>
   <FirstThreeBlogs></FirstThreeBlogs>
   <AboveFooter  my={"100px"}></AboveFooter>
   <Footer></Footer>
   </div>
  );
}
