import React, { useState, useEffect } from "react";

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const dateString = currentTime.toLocaleDateString();
    const timeString = currentTime.toLocaleTimeString();
    const usTime = new Date(currentTime.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const usTimeString = usTime.toLocaleTimeString();

    return (
        <div className="clock" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <h2 style={{ color: 'black' }}>현재 한국시간</h2>
                <p>{dateString} [{timeString}]</p>
            </div>
            <div>
                <h2 style={{ color: 'black' }}>현재 미국시간</h2>
                <p>{usTime.toLocaleDateString()} [{usTimeString}]</p>
            </div>
        </div>
    );
}

export default Clock;
