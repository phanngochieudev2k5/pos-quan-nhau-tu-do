import "./bannermain.css";
import "../../components/header/header.css";
import BnImg1 from "../../assets/images/banner/bn6.jpg";
import BnImg2 from "../../assets/images/banner/bn5.jpg";
import BnImg3 from "../../assets/images/banner/bn4.jpg";
import BnImg4 from "../../assets/images/banner/bnmain1.jpg";
const BannerMain = () => {
  return (
    <>
      <div className="bn-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 style={{ position: 'relative' }}">
              <h1 className="bn-main__title">
                TA TỰ DO TRONG <br /> THẾ GIỚI CỦA TA
              </h1>
              <div className="bn-main-decs">
                <p className="bn-main-decs__title">
                  Chuỗi quán nhậu số 1 Hà Nội
                </p>
                <ul className="bn-main-decs__list">
                  <li className="bn-main-decs__item">
                    <i class="fa-solid fa-check"></i>
                    Ẩm thực vùng miền quá đa dạng
                  </li>
                  <li className="bn-main-decs__item">
                    <i class="fa-solid fa-check"></i>
                    Bia ngon, rượu say với bạn hiền
                  </li>
                  <li className="bn-main-decs__item">
                    <i class="fa-solid fa-check"></i>
                    Cảnh đẹp, quán vui quên lối về
                  </li>
                </ul>
              </div>
              <button className="btn bn-main__btn">Đặt bàn ngay</button>
            </div>
            <div className="col-xl-6">
              <img className="bn-main__bg bn-main__bg1" src={BnImg1} alt="" />
              <img className="bn-main__bg bn-main__bg2" src={BnImg2} alt="" />
              <img className="bn-main__bg bn-main__bg3" src={BnImg3} alt="" />
              <img className="bn-main__bg bn-main__bg4" src={BnImg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerMain;
