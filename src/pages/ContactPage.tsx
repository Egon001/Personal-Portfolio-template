// components
import ParticlesWrapper from "../components/animations/ParticlesWrapper";
import { Contact } from "../components/Contact";
import Page from "../components/Page";

// -------------------------------------------------

export default function LandingPage() {
  return (
    <Page isFirst={true} withBackground={true}>
      <ParticlesWrapper />
      <Contact />
    </Page>
  );
}
