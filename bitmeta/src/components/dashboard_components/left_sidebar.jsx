import react from 'react';

function left_sidebar() {
    return (
        <div className="left_sidebar">
            <div className="top">
                <div className="icon active">
                    <i class="fa-light fa-sort"></i>
                    <span>Trade</span>
                </div>
                <div className="icon">
                    <i class="fa-light fa-share-nodes"></i>
                    <span>Vip member</span>
                </div>
                <div className="icon">
                    <i class="fa-light fa-wallet"></i>
                    <span>Wallet</span>
                </div>
                <div className="icon">
                    <i class="fa-light fa-gauge-min"></i>
                    <span>Dashboard</span>
                </div>
            </div>
            <div className="bottom">
                <i class="fa-light fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
            </div>
        </div>
    )
}


export default left_sidebar;