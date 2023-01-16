// import cartIcon from "../assets/artsy-icons/cart-icon.svg";
// import searchIcon from "../assets/artsy-icons/search-icon.svg";
// import notificationIcon from "../assets/artsy-icons/notification-icon.svg";
// import product10 from "../assets/sm-hero-images/product10.jpg";
// import product11 from "../assets/sm-hero-images/product11.png"
// import product13 from "../assets/sm-hero-images/product13.png";
// import eventImage from "../assets/events/event-photo.png";
// import pfp1 from "../assets/pfp/pfp-1.png";
// import pfp2 from "../assets/pfp/pfp-2.png";
// import pfp3 from "../assets/pfp/pfp-3.png";
// import pfp4 from "../assets/pfp/pfp-4.png";
// import pfp5 from "../assets/pfp/pfp-5.png";
import {
    RiMoneyDollarCircleLine,
    RiCommunityLine,
    RiStackLine,
    RiPlantLine,
    RiShieldStarLine,
    RiEye2Line,
    RiFacebookBoxFill,
    RiTwitterFill,
    RiLinkedinFill,
    RiYoutubeFill,
    RiInstagramLine,
    RiPinterestFill,
    RiRssFill
} from "react-icons/ri";
import {MdPlace, MdLocalPrintshop, MdPhone} from "react-icons/md"
import { AiOutlineGooglePlus } from "react-icons/ai"

const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'landlord',
        url: '/landlord',
    },
    {
        id: 3,
        text: 'tenants',
        url: '/tenants',
    },
    {
        id: 4,
        text: 'contact us',
        url: '/contact',
    }
]

const aboutList = [
    {
        id: 1,
        icon: <RiMoneyDollarCircleLine />,
        text: "pay as little as possible!"
    },
    {
        id: 2,
        icon: <RiCommunityLine />,
        text: "Enjoy wisdom of community!"
    },
    {
        id: 3,
        icon: <RiStackLine />,
        text: "Let's somebody else take care of Landlord!"
    },
    {
        id: 4,
        icon: <RiPlantLine />,
        text: "Enjoy peaceful Environment!"
    },
    {
        id: 5,
        icon: <RiShieldStarLine />,
        text: "Stay Safe! Save Money!"
    },
    {
        id: 6,
        icon: <RiEye2Line />,
        text: "Pay for what you use !"
    }
]

const properties = [
    {
        id: "p1",
        image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p2",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p3",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p4",
        image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p5",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p6",
        image: "https://images.unsplash.com/photo-1600047508788-786f3865b4b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p7",
        image: "https://images.unsplash.com/photo-1600047509782-20d39509f26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1001&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p8",
        image: "https://images.unsplash.com/photo-1604709177415-38c0288ad1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p9",
        image: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p10",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p11",
        image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p12",
        image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p13",
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p14",
        image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p15",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p16",
        image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p17",
        image: "https://images.unsplash.com/photo-1600047508006-16c1f3111ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p17",
        image: "https://images.unsplash.com/photo-1600047508006-16c1f3111ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p18",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    },
    {
        id: "p18",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        address: "2578 Folsom street, san francisco, CA, 94110",
        bedroom: 4,
        shower: 2,
        size: 2,
        type: "private room",
        price: 1200
    }
]

const socialMedia = [
    {
        id: "sm1",
        icon: <RiFacebookBoxFill />,
        link: "/"
    },
    {
        id: "sm2",
        icon: <RiTwitterFill />,
        link: "/"
    },
    {
        id: "sm3",
        icon: <RiLinkedinFill />,
        link: "/"
    },
    {
        id: "sm4",
        icon: <RiYoutubeFill />,
        link: "/"
    },
    {
        id: "sm5",
        icon: <RiInstagramLine />,
        link: "/"
    },
    {
        id: "sm6",
        icon: <AiOutlineGooglePlus />,
        link: "/"
    },
    {
        id: "sm7",
        icon: <RiPinterestFill />,
        link: "/"
    },
    {
        id: "sm8",
        icon: <RiRssFill />,
        link: "/"
    }
]

const contacts = [
    {
        "id": "c1",
        "icon": <MdPlace />,
        "text": "345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345"
    },
    {
        "id": "c2",
        "icon": <MdPhone />,
        "text": "(123) 456-7890"
    },
    {
        "id": "c3",
        "icon": <MdLocalPrintshop />,
        "text": "(123) 456-7890"
    }
]

const testimonials = [
    {
        id: "t1",
        name: "Harry Wilson",
        designation: "Property Owner",
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
        pfp: "s"
    },
    {
        id: "t2",
        name: "James Adelaide",
        designation: "Property Owner",
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.",
        pfp: "s"
    }
]

const images = [
    "https://images.unsplash.com/photo-1534134368327-3d2bd764f1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    "https://www.ipma.world/assets/bruce-mars-AndE50aaHn4-unsplash.jpg",
    "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

]

export { links, aboutList, properties, socialMedia, contacts, testimonials }