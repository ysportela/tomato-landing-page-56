import heroVideo from "@/assets/HERO PAGE.mov";
import WhenTomatos from "@/components/WhenTomatos";
const Index = () => {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 right-[-40px] h-full w-[100%] object-cover object-left mix-blend-multiply">
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Hero Content */}
          <div className="flex flex-1 items-center px-8 md:px-16 mx-[139px]">
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

      {/* When Tomatos Timeline Section */}
      <WhenTomatos />
    </>);

};

export default Index;