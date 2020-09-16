import deviceService from 'services/DeviceService';

export function settings(state = { isMobile: deviceService.isMobile() }, action) {
    switch(action.type) {
        default:
            return state;
    }
}