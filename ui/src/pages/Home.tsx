import React from "react";
import DemoComponents from "./DemoComponents/DemoComponents";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[100vw] m-10 transition-colors duration-500 bg-background text-foreground">
        <DemoComponents />
      </div>
    </>
  );
};

export default Home;
