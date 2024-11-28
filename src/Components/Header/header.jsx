import logo from '././Images/kuromi.png.png';
const header=()=>{
    const Logo=()=><img src={logo} width='40px' height="40px"/>
    const Titre=()=><h1>Titre</h1>
    return <header>
            <Logo/>
            <Titre/>
           </header>
}