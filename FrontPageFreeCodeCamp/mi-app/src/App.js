import './App.css';
//import Testimonio from "./components/testimonio.jsx"
import { Testimonios } from "./components/testimonio.jsx"
//este archivo crea un componente
//es el archivo principal del proyecto
function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">
          <h1>Here is what our alumni say about us:</h1>

          <Testimonios 
          //definimos las propiedades del props
            nombre = "Shawn Wang"
            pais = "Singapore"
            imagen = "shawn"
            cargo = "Software Engineer"
            empresa = "Amazon"
            testimonio = "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
            
          />

          <Testimonios 
          //definimos las propiedades del props
            nombre = "Sarah Chima"
            pais = "Nigeria"
            imagen = "sarah"
            cargo = "Software Engineer"
            empresa = "ChatDesk"
            testimonio = "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
            
          />


          <Testimonios 
          //definimos las propiedades del props
            nombre = "Emma Bostian"
            pais = "Sweden"
            imagen = "emma"
            cargo = "Software Engineer"
            empresa = "Spotify"
            testimonio = "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
            
          />


        </div>
    </div>
  );
}
//notese que el contenedor de nombre propio testimonio se escribe con la inicial mayuscula, esto es para indicar que es un componente que estamos creando
//por supuesto que tambien debemos importar el testimonio

export default App;


//para personalizar la imagen se reemplaza de forma dinamica