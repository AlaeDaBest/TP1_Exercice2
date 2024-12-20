import logo from './logo.svg';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import image1 from '././Images/BlackPink.jpg';
import image2 from '././Images/Butterfly.jpg';
function App(){
  const Header=()=>{
      const Logo=()=><img src={image1} width='40px' height="40px"/>
      const Titre=()=><h1>Titre</h1>
      return (<header>
              <Logo/>
              <Titre/>
            </header>)
  }
  const Nav=()=>{
    return <nav>
            <a href="#">Acceuil</a>
            <a href="#">Profil</a>
            <a href="#">Contact</a>
           </nav>
  }
  const Profil=()=>{
    const Title=()=>{
        return (<section className='ProfilTitle'>
            <h2>Student Profile Page Design Example</h2>
            <h4>A Reponsive Student Profile Page Design</h4>
        </section>)
    }
    const Info=()=>{
        return (
            <div className='Container'>
                <section className='PersonalInfo'>
                    <article className='ArticlePhoto'>
                        <img src={image2} alt="" />
                        <h3>Ishmam Ahasan</h3>
                    </article>
                    <article>
                        <ul>
                            <li><span>Student ID:</span>1234567</li>
                            <li><span>Class:</span>4</li>
                            <li><span>Section:</span>A</li>
                        </ul>
                    </article>
                </section>
                <section className='Section2'>
                    <article className='TableArticle'>
                        <h3>General Information</h3>
                        <table border="1px" rules="all" >
                            <tr>
                                <td>Roll</td>
                                <td>:</td>
                                <td>125</td>
                            </tr>
                            <tr>
                                <td>Academic Year</td>
                                <td>:</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>:</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Religion</td>
                                <td>:</td>
                                <td>Group</td>
                            </tr>
                            <tr>
                                <td>Blood</td>
                                <td>:</td>
                                <td>8+</td>
                            </tr>
                        </table>
                    </article>
                    <article className='OtherInfo'>
                        <h3>Other Information</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem excepturi quia, temporibus commodi repellat velit quod doloribus eaque atque recusandae amet dolorem pariatur maiores incidunt fuga, odit voluptatum sed voluptatem.</p>
                    </article>
                </section>
            </div>
        )
    }
    return (
        <div>
            <Title/>
            <Info/>
        </div>
    )
  }
  const Footer=()=>{
    return <footer>
            <p> « copyright DEVOFS202 – 
            Alae Chentouf – année 2024/2025 »</p>
           </footer>
  }
  return (<div>
    <Header/>
    <Nav/>
    <Profil/>
    <Footer/>
  </div>)
}
export default App;
