class DeviceService {
    isMobile() {
        const nav = global['navigator'];
        if (!nav || !nav.userAgent) {
            return false;
        }
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
    
        return toMatch.some((toMatchItem) => {
            return nav.userAgent.match(toMatchItem);
        });
    }
}


export default new DeviceService();