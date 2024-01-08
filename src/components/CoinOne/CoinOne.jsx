import "./CoinOne.scss";
import coinVidOne from "../../assets/video/coin-vid-1.mp4";

export default function CoinOne() {
  return (
    <div className="projects__wrap">
      <div className="projects__header">
        <div className="projects__header-container">
          <h2 className="projects__name">Coin</h2>
        </div>
        <div className="projects__header-container">
          <p className="projects__description">
            See how much money your friends have and how you compare...
          </p>
        </div>
      </div>
      <div className="projects__image-wrap">
        <video
          className="projects__video projects__video--first"
          src={coinVidOne}
          autoPlay
          muted
          controls
        />
      </div>
    </div>
  );
}
