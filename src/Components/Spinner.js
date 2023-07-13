import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";
const Spinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Lottie className="aspect-auto lg:w-1/2 lg:aspect-auto p-8"
        animationData={loadingAnimation} loop={true}
      />
    </div>
  );
};

export default Spinner;