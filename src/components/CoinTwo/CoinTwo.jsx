import "./CoinTwo.scss";
import coinVidTwo from "../../assets/video/coin-vid-2.mp4";

export default function CoinTwo() {
  return (
    <div className="projects__wrap">
      <div className="projects__header">
        <div className="projects__header-container">
          <h2 className="projects__name">Coin</h2>
        </div>
        <div className="projects__header-container">
          <p className="projects__description">
            Chat with an AI Assistant to understand your finances
          </p>
        </div>
      </div>
      <div className="projects__image-wrap">
        <video
          className="projects__video"
          src={coinVidTwo}
          autoPlay
          muted
          controls
        />
      </div>
    </div>
  );
}
