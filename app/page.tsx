import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LineCharts from "@/components/LineCharts";
import BarCharts from "@/components/BarCharts";

export default function Home() {
  return(
    <main>
      <Features />
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <LineCharts />
          <BarCharts />
        </div>
      </section>
    </main>
  );
}