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
        className="absolute top-0 right-0 h-full w-[65%] object-cover object-left"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col">

        {/* Hero Content */}
        <div className="flex flex-1 items-center px-8 md:px-16">
          <div className="max-w-xl animate-fade-up">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl" style={{ color: '#201E1F' }}>
              Pure{" "}
              <span style={{ color: '#FF5233' }}>Flavor</span>
              <br />
              Real Power
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
