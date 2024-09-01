import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <h1>My Projects</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, corporis.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, corporis.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, corporis.</p>
      </div>
      <Footer />
    </div>
  );
}

//Example of server side rendering but it was not implemented
// export async function getServerSideProps() {
//     const res = await fetch('https://api.example.com/projects');
//     const projects = await res.json();
  
//     return {
//       props: {
//         projects,
//       },
//     };
//   }
  