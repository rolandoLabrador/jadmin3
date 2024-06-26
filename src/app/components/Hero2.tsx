const Hero2 = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/jadminHeroPic.png")`,
          backgroundSize: "75%", // Adjust the background size to 80% to make it slightly smaller
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero2;
  