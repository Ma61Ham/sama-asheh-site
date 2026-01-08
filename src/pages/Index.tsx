import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import RequestForm from "@/components/RequestForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <RequestForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
