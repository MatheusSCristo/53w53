const Home = () => {
  return (
    <div className="h-[100vh] ">
      <video autoPlay muted loop id="myVideo" className="object-cover h-full w-full" >
        <source src="background_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
