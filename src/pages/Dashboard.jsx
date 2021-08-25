
import Navbar from '../components/Navbar';
import Content  from '../components/Content';

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row ">
    <Navbar />
    <Content />
    
   
    </div>
   
  );
}

export default Dashboard;
