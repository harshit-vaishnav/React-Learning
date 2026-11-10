
import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx';

const Section1 = (props) => {
   
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page1Content  data = {props.data} />
    </div>
  );
}

export default Section1