
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
     {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:"",
      tag:"Satisfied"
     },
     {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:"",
      tag:"underserved"
     },
     {
      img:"https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro:"",
      tag:"underbanked"
     },
     {
      img : "https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      intro :"",
      tag :"underwear"
     },

  ]
  return (
    <div>
        <Section1 data = {users}/>   
        <Section2/>
     </div>
  )
}

export default App