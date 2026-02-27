import heroVideo from "@/assets/hero-video.mp4";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Nav */}
        <nav className="flex items-center justify-between px-8 py-6 md:px-16">
          <span className="text-lg font-bold tracking-tight text-foreground">
            TOMATO<span className="text-primary">.</span>
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#" className="transition-colors hover:text-foreground">Products</a>
            <a href="#" className="transition-colors hover:text-foreground">About</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-1 items-center px-8 md:px-16">
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Pure{" "}
              <span className="text-primary">Flavor</span>
              <br />
              Real Power
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              Farm-fresh tomatoes packed with nutrients. Experience the taste of nature, delivered to your table.
            </p>
            <button className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
