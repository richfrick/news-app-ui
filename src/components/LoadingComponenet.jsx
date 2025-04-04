import Lottie from 'lottie-react';
import loading from '../assets/loading.json';

function Loading() {
  return (
    <div className="flex justify-center pt-20">
      <div className="w-32 h-32">
        <Lottie animationData={loading} width="100%" height="100%" />
        <p>Loading.....</p>
      </div>
    </div>
  );
}
export default Loading;
