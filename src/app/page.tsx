import Header from "@/components/header";
import Title from "@/components/title";
import Details from "@/components/details";
import Partners from "@/components/partners";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="font-mono min-h-screen">
      <main className="flex flex-col justify-around px-8 py-4 md:px-20 md:py-12 h-screen">
        <Header />
        <Title />
        <Details />
        <Partners />
      </main>

      <div className="mt-10">
        <Separator />
        <Footer />
      </div>
    </div>
  );
}
