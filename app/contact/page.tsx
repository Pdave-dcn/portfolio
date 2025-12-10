import HeroSection from "@/components/sections/contactPage/HeroSection";
import LinkSection from "@/components/sections/contactPage/LinkSection";
//import IntroParagraph from "@/components/sections/contactPage/IntroParagraph";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-15">
        <HeroSection />
        {/* <IntroParagraph /> */}
      </div>
      <LinkSection />
    </div>
  );
};

export default ContactPage;
