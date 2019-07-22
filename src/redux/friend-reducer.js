let initialState = {
    friends:  [
        {
            id: "0",
            name: "Richard Nyman",
            avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
            status: "Online"
        },
        {
            id: "1",
            name: "Isaiah Ayrton",
            avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
            status: "Online"
        },
        {
            id: "2",
            name: "Destiny Higgins",
            avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
            status: "Offline"
        },
        {
            id: "3",
            name: "Abigail Simson",
            avatar: "https://im0-tub-kz.yandex.net/i?id=7a8014ab033e9beef8d2d46cc1245203-l&n=13",
            status: "Online"
        },
        {
            id: "4",
            name: "Anna Sven",
            avatar: "https://im0-tub-kz.yandex.net/i?id=cd1cffb02de7a1fb75c8c631caf2283f&n=13&exp=1",
            status: "Offline"
        },
        {
            id: "5",
            name: "Eleanor Harison",
            avatar: "https://im0-tub-kz.yandex.net/i?id=bfa911ae87c9cac4077d71ecafc5ff3c&n=13",
            status: "Offline"
        },
        {
            id: "6",
            name: "Emily Person",
            avatar: "https://im0-tub-kz.yandex.net/i?id=59eb04cf2522c48bfcc97e2ee9fc059e-l&n=13",
            status: "Offline"
        },
        {
            id: "7",
            name: "Grace Hilton",
            avatar: "https://im0-tub-kz.yandex.net/i?id=e7f19129ffee0a57e6f121db68d01476&n=13&exp=1",
            status: "Online"
        }
    ]
}

const friendReducer = (state = initialState, action) => {
    return Object.assign({}, state,)
}

export default friendReducer;