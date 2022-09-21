import { useState } from "react";
import Layout from "../layout/Layout";
import Button from '@mui/material/Button';
import RuleBuilder from "../components/RuleBuilder";

const Home = () => {
    const [open, setOpen] = useState(false);
    
    return (
     <Layout>
        <div className="red">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>  
          <RuleBuilder open={open} setOpen={setOpen} />
        </div>
     </Layout>
    );
  }
  
  export default Home;