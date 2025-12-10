import { INTRO_DATA } from "@/lib/contact-page.data";
import { typography } from "@/lib/design-tokens";

const IntroParagraph = () => {
  return (
    <div>
      <p className={`${typography.body}`}>{INTRO_DATA.text}</p>
    </div>
  );
};

export default IntroParagraph;
