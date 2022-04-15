import Countdown from 'react-countdown';

const Timer = () => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</span>;
        }
    };
    const Completionist = () => <span></span>;
    return (
        <Countdown date={Date.now() + 299400} renderer={renderer} />
    )
}

export default Timer;