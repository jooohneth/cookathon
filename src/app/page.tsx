import Header from "@/components/header";
import Title from "@/components/title";
import Details from "@/components/details";
import Partners from "@/components/partners";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-mono min-h-screen ">
      <main className="flex-1 p-4 md:px-20 md:py-12">
        <Header />
        <Title />
        <Details />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
