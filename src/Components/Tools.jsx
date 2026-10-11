import boltLogo from "../assets/boltlogo.png";
import bolt from "../assets/bolt.png";
const Tools = () => {
  return (
    <div>
      <h2>App工具</h2>
      <div className="bus">
        <div className="software">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e0/a8/8d/e0a88dfb-89fe-aa5b-1413-87f596915661/Placeholder.mill/400x400bb-75.webp"
            alt="ratp"
          />
          <p>巴黎公交軟體, 交通時間與購買電子票</p>
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
          <p>南法公交軟體, 交通時間與購買電子票</p>
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
                alt="QR-code"
              />
            </a>
          </div>
        </div>
        <div className="software">
          <img src={boltLogo} alt="boltlogo" />
          <p>計程車</p>
          <div className="phone1">
            <img src={bolt} alt="bolt" />
          </div>
        </div>
      </div>
      <div className="info">
        <h2>注意事項</h2>
        <br />
        <li>
          <p>體感偏凍：</p>
          二月份法國全境普遍寒冷，巴黎體感風大且多陰天，平均氣溫大約落在
          3-9度之間。有點刺骨的寒風。南法天氣比巴黎好一點，氣溫約
          5-13度，法國商店都有暖氣。建議採取洋蔥式穿法，最內一件不要穿太厚以免，因為店內暖氣太強而流汗。除了厚毛衣與羽絨大衣，帽子、圍巾和手套至關重要。在風大時，保護好頭部與耳朵能提升溫度，也可考慮暖暖包。如果運氣好碰到從阿爾卑斯山吹向地中海的強烈乾冷陣風，包好就沒事了。
        </li>
        <li>
          <p>白晝短暫：</p>
          二月的白天較短，通常約8點日出，下午5點半至6點前天就黑了。許多古堡或戶外景點會採用冬季營業時間並提早關門。所以事先查詢相關資料。
        </li>
        <li>
          <p>預防偷竊：</p>
          如果不安心，建議紙鈔、護照放置內襯式腰包。背包換到胸前背，手機繫著繩線。要不然就神明的保佑也是有加分的。
        </li>
        <li>
          <p>飲食：</p>
          法國全境可飲自來水，但因為冬天寒冷，建議熱過再喝，餐廳喝水不用錢，除非要求瓶裝水。法國廁所很少，所以建議以小口飲水，減少突然想上廁所的機會。
        </li>
        <li>
          <p>購物：</p>2027年冬季打折為1月6號-2月2號，如果想網購，我可以代收。
        </li>
        <li>
          <p>交通：</p>
          巴黎地鐵老舊，或是人的意外，如搭火車，建議提早出門，免得地鐵有突發事件無法趕上火車。
        </li>
        <p>
          善用網路資訊：出門時先把地址輸入線上地圖，迷路直接入地鐵再到想要的地方就可。遇到事件靜心對待，沒有不能解決的問題。現在網路資料充足，幾乎沒有AI回答不出來的問題，用來收尋旅行資料綽綽有餘
          (但不建議生活依賴它)。
        </p>
      </div>
    </div>
  );
};
export default Tools;
