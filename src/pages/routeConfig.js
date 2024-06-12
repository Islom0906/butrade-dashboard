import { MdOutlineAddTask, MdOutlineCategory} from "react-icons/md";
import {BsFillImageFill} from "react-icons/bs";
import {FaRegHandshake} from "react-icons/fa";
import {TiContacts} from "react-icons/ti";
import {HiOutlineInbox} from "react-icons/hi";
import {SlBasketLoaded} from 'react-icons/sl'
import {FiInfo} from "react-icons/fi";

const routesConfig = [
    {
        id: 'app',
        title: 'Sample',
        messageId: 'sidebar.sample',
        type: 'group',
        children: [
            {
                id: 'order',
                title: 'order',
                messageId: 'sidebar.sample.order',
                type: 'item',
                icon: <SlBasketLoaded/>,
                path: '/order',
            },
            {
                id: 'product',
                title: 'product',
                messageId: 'sidebar.sample.product',
                type: 'item',
                icon: <HiOutlineInbox />,
                path: '/product',
            },
            {
                id: 'category',
                title: 'category',
                messageId: 'sidebar.sample.category',
                type: 'item',
                icon: <MdOutlineCategory/>,
                path: '/category',
            },
            {
                id: 'Advantages Title',
                title: 'Advantages Title',
                messageId: 'sidebar.sample.advantagesPage',
                type: 'collapse',
                icon: <MdOutlineAddTask/>,
                children: [
                    {
                        id: 'Advantages Title',
                        title: 'Advantages Title',
                        messageId: 'sidebar.sample.advantagesTitle',
                        type: 'item',
                        path: '/advantage-title',
                    },
                    {
                        id: 'Advantages',
                        title: 'Advantages',
                        messageId: 'sidebar.sample.advantages',
                        type: 'item',
                        path: '/advantage',
                    },
                ]
            },

            {
                id: 'partners',
                title: 'partners',
                messageId: 'sidebar.sample.partners',
                type: 'item',
                icon: <FaRegHandshake/>,
                path: '/partners',
            },
            {
                id: 'banner',
                title: 'banner',
                messageId: 'sidebar.sample.banner',
                type: 'item',
                icon: <BsFillImageFill/>,
                path: '/banner',
            },
            {
                id: 'contact',
                title: 'contact',
                messageId: 'sidebar.sample.contact',
                type: 'item',
                icon: <TiContacts/>,
                path: '/contact',
            },
            {
                id: 'about-index',
                title: 'about-index',
                messageId: 'sidebar.sample.aboutIndex',
                type: 'item',
                icon: <FiInfo/>,
                path: '/about-index',
            },


        ],
    },
];
export default routesConfig;
