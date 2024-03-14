

export const formatTimeAgo = (elapsedTime: number) => {
    if (elapsedTime < 60) {
        return `${elapsedTime}m ago`;
    } else if (elapsedTime < 1440) { // 1440 minutes in a day
        const hours = Math.floor(elapsedTime / 60);
        return `${hours}h ago`;
    } else {
        const days = Math.floor(elapsedTime / 1440);
        return `${days}d ago`;
    }
};
