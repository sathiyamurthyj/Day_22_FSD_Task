import { RxCheck } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import "./price-card.css";

const Pricecard = (props) => {
    const plan = props.plan;
    const price = props.price;
    const userCount = props.userCount;
    const planFeatures = ["User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"];
    planFeatures[0] = userCount+" "+planFeatures[0];
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        <h6 className="disabled">{plan}</h6>
                        <h2>${price}/month</h2>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            {planFeatures.map((feature,index)=>(
                                <li key={index} className={props.feat[index]===0?"disabled":null}>{props.feat[index] === 1?<RxCheck />:<RxCross1 />} {feature}</li>
                            ))}
                        </ul>
                        <div className="d-grid col-10 mx-auto">
                            <button className="btn btn-primary">BUTTON</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Pricecard;

