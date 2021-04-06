import { FaUniversity } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";




const MainSection1 = () => {
    return ( 
        <div className="container-ms  bg-light">
            <div className="container">
                <div className="btn-2 text-center ">
                <button type="button" class="btn btn-primary">WHAT WE OFFER</button>
                </div>
            

<div className="row row-cols-1 row-cols-md-2 g-4 py-4">
<div className="col ">
<div className="card rounded">
<div className="icons1 text-center">
<FaUniversity></FaUniversity>
</div>

<div className="card-body">
<h5 className="card-title text-center">UNIVERSITY</h5>
<p className="card-text text-center ">Select a university of your choice and we would provide you with all necessary information.</p>
</div>
</div>
</div>
<div className="col">
<div className="card rounded">
<div className="icons1 text-center">
<MdLibraryBooks></MdLibraryBooks>
</div>
    
<div className="card-body">
<h5 className="card-title text-center">COURSES</h5>
<p className="card-text text-center">Get access to every resources and information you need to know about your course of choice.</p>
</div>
</div>
</div>
<div className="col">
<div className="card rounded">
<div className="icons1 text-center">
<IoMdGlobe></IoMdGlobe>
</div>

<div className="card-body">
<h5 className="card-title text-center ">GLOBAL AND LOCAL EVENTS</h5>
<p className="card-text text-center">We provide mentorship to secondary school students on how to go about selecting their course of choice.</p>
</div>
</div>
</div>
<div className="col">
<div className="card rounded">
<div className="icons1 text-center">
<IoIosPeople></IoIosPeople>
</div>

<div className="card-body">
<h5 className="card-title text-center">MENTORSHIP</h5>
<p className="card-text text-center">Experience one-on-one mentorship with our facilitators who have acquired vast knowledge and experiences in the field.</p>
</div>
</div>
</div>
</div>
            </div>
            
        </div>
    
        
     );
}
 
export default MainSection1;