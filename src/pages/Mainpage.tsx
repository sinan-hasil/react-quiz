import { Container } from "react-bootstrap";
import "./css/mainpage.css"

const Mainpage = () => {
  return (
    <Container>
      <div className="content mt-5">
        <h1>React Yazılım Quiz Uygulaması</h1>
        <div className="explanation">
          <div className="about">
            <h4>Hakkında</h4>
            <p>
              React Yazılım Quiz Uygulaması, yazılım dünyasında bilginizi test
              edebileceğiniz interaktif bir platformdur. Bu uygulama, hem yeni
              başlayanlar hem de deneyimli geliştiriciler için eğitici ve
              eğlenceli bir öğrenme deneyimi sunar. Yazılım konularında
              kendinizi test ederek eksiklerinizi keşfedebilir, her yeni soruyla
              bilgi seviyenizi artırabilirsiniz.
            </p>
          </div>
          <div className="why-react">
            <h4>Neden React?</h4>
            <p>
              Bu uygulama, modern JavaScript kütüphanesi React kullanılarak
              geliştirildi. React'in bileşen tabanlı yapısı, uygulamanın modüler
              ve yeniden kullanılabilir bir şekilde geliştirilmesini sağlıyor.
              Bu sayede, kullanıcılar hızlı ve akıcı bir deneyim yaşıyor.
              React'in güçlü state yönetimi ve hooks özellikleri, uygulamanın
              dinamik bir şekilde çalışmasını mümkün kılıyor.
            </p>
          </div>
        </div>
        <h4>Nasıl Oynanır?</h4>
        <ul>
            <li><b>Soruları Yanıtlayın:</b>Yazılım dünyasına dair sorulara en doğru cevabı seçin.</li>
            <li><b>Sonraki Sorulara Geçin:</b>Her soruyu yanıtladıktan sonra "Next" butonuna tıklayarak bir sonraki soruya geçin.</li>
            <li><b>Puanınızı Görün:</b>Tüm soruları cevapladıktan sonra aldığınız toplam puanı öğrenin.</li>
            <li><b>Kendinizi Geliştirin:</b>Sonuçlarınızı analiz edin ve her seferinde daha iyi bir performans sergilemeye çalışın.</li>
        </ul>
      </div>
    </Container>
  );
};

export default Mainpage;
