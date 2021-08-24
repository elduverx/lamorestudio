
import "./contact.scss";

export default function Contact() {
  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/profile.png.jpeg" alt="" />
      </div>
      <div className="right">
      <section className="contactC">
      <div className="content">
        <h2 className="ff">Contactanos</h2>
        <p className="fff">L'amore Studio  convocatoria abierta para modelos y monitores, envianos un mensaje!</p>
      </div>
      <div className="containerC">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i class="fas fa-search-location"></i>  </div>
              <div className="text">
                <h3 className="h3">Ubicacion</h3>
                <p>Barrio ciudad 2000 , <br />Cali, Colombia</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="fab fa-whatsapp"></i> </div>
              <div className="text">
                <h3 className="h3">Telefono</h3>
                <p>+57 311 686 7332</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="far fa-envelope"></i></div>
              <div className="text">
                <h3 className="h3">E-mail</h3>
                <p>lamorecali@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
  );
}
    
