import './App.css';
import mifoto from './img/estudiante.jpeg';

function App() {
  return (
    <div className="App">
    <h1>ELMER GALARZA MAMANI</h1>
    <img src={mifoto} alt="Foto de Perfil"/>
    <h2>Sobre Mí</h2>
    <p>Soy informático con experiencia en software y hardware. Me apasiona el desarrollo web y busco constantemente aprender y crecer en mi campo.</p>

    <h2>Experiencia Profesional</h2>
    <h3>Docente de informática</h3>
    <p><strong>[Nombre de la Empresa]</strong> | [Fecha de inicio] - Presente</p>
    <p>- Descripción breve de tus responsabilidades y logros.</p>

    <h3>[Puesto Anterior]</h3>
    <p><strong>[Nombre de la Empresa]</strong> | [Fecha de inicio] - [Fecha de fin]</p>
    <p>- Descripción breve de tus responsabilidades y logros.</p>

    <h2>Educación</h2>
    <h3>[Tu Título]</h3>
    <p><strong>[Nombre de la Institución]</strong> | [Año de graduación]</p>

    <h2>Habilidades</h2>
    <ul>
        <li>[Habilidad 1]</li>
        <li>[Habilidad 2]</li>
        <li>[Habilidad 3]</li>
        <li>[Habilidad 4]</li>
    </ul>

    <h2>Contacto</h2>
    <div class="contact-info">
        <p><strong>Email:</strong> [tuemail@ejemplo.com]</p>
        <p><strong>Teléfono:</strong> [tu número de teléfono]</p>
        <p><strong>LinkedIn:</strong> <a href="[enlace a tu perfil de LinkedIn]" target="_blank">[Tu Perfil]</a></p>
        <p><strong>GitHub:</strong> <a href="[enlace a tu perfil de GitHub]" target="_blank">[Tu Perfil]</a></p>
    </div>

    <h2>Descargar CV</h2>
    <a href="URL_de_tu_CV.pdf" target="_blank">Descargar CV PDF</a>
</div>

  );
}

export default App;
