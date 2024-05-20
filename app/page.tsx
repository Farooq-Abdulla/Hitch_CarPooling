import DownloadSection from "@/components/ui/DownloadSection";
import Footer from "@/components/ui/Footer";
import HitchInfoBlock from "@/components/ui/HitchInfoBlock";
import MapSection from "@/components/ui/MapSection";
import NavBar from "@/components/ui/NavBar";
import SafetyInfo from "@/components/ui/SafetyInfo";
import ServicesSection from "@/components/ui/ServicesSection";
import VideoComponent from "@/components/ui/videoComponent";


export default function Home() {
  return (
    <>
      <NavBar />
      <VideoComponent />
      <HitchInfoBlock />
      <SafetyInfo />
      <MapSection />
      <ServicesSection />
      <DownloadSection />
      <Footer />
    </>
  );
}
