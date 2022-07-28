import Banner from "./components/banner";
import Boxes from "./components/boxes";
import Targets from "./components/targets";
import Cases from "./components/cases";

const Home = () => {
  return (
    <div className="flex_container">
      <div>
        <Banner />
      </div>
      <div>
        <Boxes />
      </div>
      <div>
        <Targets />
      </div>
      <div>
        <Cases />
      </div>
    </div>
  );
};
export default Home;
