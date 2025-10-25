import Hero from './components/Hero';
import RoleTabs from './components/RoleTabs';
import CourseGrid from './components/CourseGrid';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <header className="relative h-[80vh] md:h-[85vh] overflow-hidden">
        <Hero />
      </header>

      <main className="relative z-10">
        <section className="container mx-auto px-4 md:px-8 -mt-24">
          <div className="bg-neutral-900/70 backdrop-blur-xl border border-neutral-800/70 rounded-2xl shadow-2xl p-4 md:p-8">
            <RoleTabs />
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
          <CourseGrid />
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
