import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import yinYang from '../assets/images/yin_yang.svg'
import profile from '../assets/images/Profile.png'
import Header from '../components/Header'
import Layout from '../components/layout'
// import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Technologijų apribojimas" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        {/* <Nav sticky={this.state.stickyNav} /> */}

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Esu Džiugas Šablauskas</h2>
                </header>
                <p>
                  Esu naujovių bei technologijų entuziastas, patinka nauda, kurią technologijos suteikia. 
                  Esu 'Programišius', užsiimu internetinių bei mobiliųjų aplikacijų kurimu,
                  studijuoju informacinių technologijų verslą universitete.
                  Technologijos - neatsiejama dalis mano gyvenime, tačiau atneša išsiblaškymą bei kitus šešėlius...<br /><br />
                  Taip kilo siekis rasti ir tinkamai pritaikyti technologijų apribojimo galimybes. 
                  Šiandien jau daugiau nei trys metai, kaip taikau įrenginių apribojimus.
                </p>
                {/* <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Sužinok daugiau
                    </Link>
                  </li>
                </ul> */}
              </div>
              <span className="image">
                <img src={profile} alt="Profilio nuotrauka" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Apribojimo Siekiai</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-laptop"></span>
                <h3>Priklausomybės Laisvė</h3>
                <p>
                  Priklausomybės nesuvokiame, kol nepamatome naudojimosi statistikos duomenų.
                  Apribojimas padės statistikos skaičius sumažinti
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-adjust"></span>
                <h3>Sąmoningumas</h3>
                <p>
                  Įpročiai pastebimi, kai atkreipiame dėmesį į įrenginio naudojimąsi.
                  Tuomet imame sąmoningiau ir tikslingiau naudotis technologijomis
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-diamond"></span>
                <h3>Disciplinos Ugdymas</h3>
                <p>
                  Kartais sunku nustoti naršyti ar naudotis įrenginiu, tačiau esant limitams 
                  atsikratomas dažnas "Dar truputi panaršysiu" įprotis
                </p>
              </li>
            </ul>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Daugiau Vertybių
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Individuali Įrenginio Konfiguracija</h2>
              <p>
                Esate užsiėmę ir neturite laiko apribojimų įdiegimui ar tiesiog sudėtinga gaudytis technologijų pinklėse?
              </p>
            </header>
            <ul className="statistics">
              {/* <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li> */}
              {/* <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li> */}
              <li className="style3">
                <span className="icon fa-signal"></span><br/>
                Padėsiu sutaupyti laiką ir tinkamai sukonfigūruoti jūsų įrenginį
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span><br />
                Apmokysiu, kad kitą kartą norint atnaujinti apribojimus, tai padaryti galėtumėte lengvai patys
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span><br />
                Atsakysiu į klausimus bei parinksiu geriausią apribojimų variantą
              </li>
            </ul>
            <header className="major">
            <p>
              Individualios Konfiguracijos Kaina: 60 eur.<br/>
              Jei domina, drąsiai kreipkitės ir suderinsime jums patogų susitikimo laiką bei būdą!<br/>
              Susisiekti galite elektroniniu paštu: <span style={{fontWeight: "400"}}>blauskas@gmail.com</span><br/>
              Arba socialiniais tinklais:
            </p>
              <ul className="icons">
                <li>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100007791466332"
                     className="icon fa-facebook alt" style={{marginRight: "2vh"}}
                     >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/sablauskas.cia/" 
                    className="icon fa-instagram alt"
                  >
                    <span className="label">Instagram</span>
                  </a>
                </li>
              </ul>
            </header>
            {/* <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Užsisakyti
                  </Link>
                </li>
              </ul>
            </footer> */}
          </section>

          <section id="cta" className="main special">
            <header className="major" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
              {/* <h2>Congue imperdiet</h2> */}
              <p style={{fontWeight: 400}}>Technologijos yra skirtos palengvinti bei pagerinti mūsų gyvenimą, o ne apsunkinti</p>
              <span className="logo" style={{width: "10vh",height: "10vh"}}><img src={yinYang} alt="" /></span>
            </header>
            
            <footer className="major">
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul> */}
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
