import react from 'react';
import SiteLogo from '../../assets/images/logo.svg';
import top_btn from '../../assets/images/top-btn.png';

function dashboard_header() {
    return (
        <div className="dashboard_header">
            <img src={SiteLogo} alt="Bitmeta Trade" />
            <div className="right">
                <img src={top_btn} alt="Prize Pool" />
                <div className="demo_account">
                    <div className="two">
                        <span>
                            Demo Account
                        </span>
                        <strong>
                            $1000
                        </strong>
                    </div>
                    <i class="fa-light fa-chevron-down"></i>
                </div>
                <div className="colored_btn">Quick Deposit</div>
                <div className="icons">
                    <div className="icon">
                        <div className="box">
                            <i class="fa-regular fa-gear"></i>
                        </div>
                        <span>Settings</span>
                    </div>
                    <div className="icon">
                        <div className="box">
                            <i class="fa-light fa-circle-user"></i>
                        </div>
                        <span>Profile</span>
                    </div>
                    <div className="icon">
                        <div className="box">
                            <small>83</small>
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <span>Notifications</span>
                    </div>
                </div>
                <span className="pipe"></span>
                <div className="vertical_elipsis">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </div>
    )
}


export default dashboard_header;