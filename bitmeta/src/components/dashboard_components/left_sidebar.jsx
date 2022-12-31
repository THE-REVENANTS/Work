import react from 'react';

function left_sidebar() {
    return (
        <div className="left_sidebar">
            <div className="top">
                <div className="icon">
                    <i class="fa-solid fa-sort"></i>
                    Trade
                </div>
                <div className="icon">
                    <i class="fa-solid fa-share-nodes"></i>
                    Vip member
                </div>
                <div className="icon">
                    <i class="fa-solid fa-wallet"></i>
                    Wallet
                </div>
                <div className="icon">
                    <i class="fa-solid fa-gauge-min"></i>
                    Dashboard
                </div>
            </div>
        </div>
    )
}


export default left_sidebar;