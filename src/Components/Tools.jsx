const Tools = () => {
  return (
    <div>
      {" "}
      <h2>下載 App工具</h2>
      <div className="bus">
        <div className="software">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e0/a8/8d/e0a88dfb-89fe-aa5b-1413-87f596915661/Placeholder.mill/400x400bb-75.webp"
            alt="ratp"
          />
          <p>巴黎公交軟體, 提供交通時間與購買電子票</p>
          <div className="phone">
            <a href="https://apps.apple.com/fr/app/%C3%AEle-de-france-mobilit%C3%A9s/id484527651">
              <img
                src="https://img.icons8.com/plasticine/100/iphone-x.png"
                alt="iphone-x"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.applidium.vianavigo&hl=fr">
              <img
                src="https://img.icons8.com/plasticine/100/android-os.png"
                alt="android-os"
              />
            </a>
          </div>
        </div>
        <div className="software">
          <img src="https://zou.maregionsud.fr/public/media/logo/2026-04/zou-paca.svg_.png" />
          <p>南法公交軟體, 提供交通時間與購買電子票</p>
          <div className="phone">
            <a href="https://apps.apple.com/fr/app/allez-zou/id6754984440">
              <img
                src="https://img.icons8.com/plasticine/100/iphone-x.png"
                alt="iphone-x"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=fr.maregionsud.zousibr">
              <img
                src="https://img.icons8.com/plasticine/100/android-os.png"
                alt="android-os"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tools;
