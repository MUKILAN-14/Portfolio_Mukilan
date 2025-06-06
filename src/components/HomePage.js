export default function HomePage() {
  return (
    <div className="h-full rounded-3xl bg-gradient-to-b from-[rgb(156,136,207)] to-[rgb(81,36,121)]">
      
 <div className="flex text-white font-semibold justify-between items-center px-6 py-6">
    <a  href="#">About</a>
    <a href="#">Conatcts</a>
    <a href="#">Projects</a>
  </div>     
  
      <div className="flex flex-col justify-center items-center h-screen text-white text-center ">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Hi, I'm Mukilan M
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light text-white/80">
          A Passionate Frontend Developer
        </p>
      </div>
    </div>
  );
}
