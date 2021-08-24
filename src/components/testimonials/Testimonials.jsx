import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Vita Clara",
          title: "Jazmin Model",
          img:
            "https://mellow-age.com/wp-content/uploads/2019/08/60639460_440929313389831_6830910641122162868_n.jpg",
          icon: "assets/twitter.png",
          desc:
            "#l'amoreStudio ha sido el lugar en el que he aprendido y crecido profesionalmente, gracias a sus instalaciones aqui puedo ser modelo Jazmin",
        },
        {
          id: 2,
          name: "Alexa_Angel",
          title: "Jazmin Model",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/twitter.png",
          desc:
            "Agradecida infinitamente con L'amore Studio por brindarme la oportunidad de trabajar con ellos, gracias a ellos he podido costear mis estudios universitarios y tener un trabajo digno en mi vida. ",
          featured: true,
        },
        {
          id: 3,
          name: "Martina Devora",
          title: "C4 Top",
          img:
            "https://mellow-age.com/wp-content/uploads/2019/08/62178721_386146062014304_75842617690581169_n-370x285.jpg",
          icon: "assets/linkedin.png",
          desc:
            "Gracias al acompañamiento brindado en L'amore Studio, he logrado escalar de manera eficaz en poco tiempo!, ahora mi salario sobrepasa los $2000 gracias de corazon.",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonios</h1>
            <div className="container">
                {data.map(d=>(

                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img 
                        className="user"
                        src={d.img} alt="" />
                        <img 
                        className="right"
                        src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
              ))}
            </div>
            
        </div>
    )
}
