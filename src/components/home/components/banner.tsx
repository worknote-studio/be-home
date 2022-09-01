import BannerImg from "../../../image/banner.png";

const Banner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
      <img src={BannerImg.src} style={{ width: "850px" }} />
    </div>
    // <div className="banner_bkg"></div>
  );
};
export default Banner;
