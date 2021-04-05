import "./BodyOne.css";
const BodyOne = () => {
    return (
        <div className="wrapper2">
            <div className="left">
            <h3>latest news</h3>
            <div className="card2">
                <div>
                    <h4>March 30,2021</h4>
                    <p>Obafemi awolowo university commences admission process for the 2019/2020 session</p>
                </div>
                <hr style={{border: "1px solid #0A1650", boxSizing: "border-box", borderRadius: "0px", width:"100%"}}/>
                <div>
                    <h4>March 30,2021</h4>
                    <p>Obafemi awolowo university commences admission process for the 2019/2020 session</p>
                </div>
                <hr style={{border: "1px solid #0A1650", boxSizing: "border-box", borderRadius: "0px", width:"100%"}}/>
                <div>
                    <h4>March 30,2021</h4>
                    <p>Obafemi awolowo university commences admission process for the 2019/2020 session</p>
                </div>
                <hr style={{border: "1px solid #0A1650", boxSizing: "border-box", borderRadius: "0px", width:"100%"}}/>
                <div>
                    <h4>March 30,2021</h4>
                    <p>Obafemi awolowo university commences admission process for the 2019/2020 session</p>
                </div>
            </div>
            </div>

            <div className="right">
                <p>Do you want to be the first to recieve information about offers, services, scholarships, educational materials and general updates? then sign up for our Monthly news letter</p>
                <form>
                    <input placeholder="Email Address"></input>
                    <span></span>
                    <span></span>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}
 
export default BodyOne;