import Lottie from "lottie-react";
import emptyAnimation from "../assets/empty.json";

export default function Empty() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Lottie className="aspect-auto lg:w-1/4 lg:aspect-auto lg:-mt-36"
        animationData={emptyAnimation} loop={true}
      />
    </div>
  )
}