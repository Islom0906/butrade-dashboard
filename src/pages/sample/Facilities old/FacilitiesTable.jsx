import {Button, Image, Popconfirm, Space, Table, Tag} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import {useNavigate} from "react-router-dom";

const FacilitiesTable = ({data,deleteHandle}) => {
    const dispatch=useDispatch()
    const navigate =useNavigate()
    const Delete = async (id) => {
        deleteHandle('/about/about-facilities',id)
    };


    const Edit = (id) => {
        localStorage.setItem('editDataId',id)
        dispatch({type:EDIT_DATA,payload:id})
        navigate('/facilities/add')
    };

    const columns = [
        {
            title: 'Title Ru',
            dataIndex: 'title_ru',
            id: 'title_ru',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Title Uz',
            dataIndex: 'title_uz',
            id: 'title_uz',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Title En',
            dataIndex: 'title_en',
            id: 'title_en',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Home page',
            dataIndex: 'is_index',
            id: 'is_index',
            render: (text) => <Tag color={text ? '#3b5999' :"#cd201f"}>{text ? "Да":"Нет"}</Tag>,
        },
        {
            title: 'Image',
            dataIndex: 'inner_image',
            id: 'inner_image',
            render: (image) => {
                return (
                    <Image
                        width={50}
                        src={image?.image}
                    />
                )
            },
        },
        {
            title: 'Action',
            id: 'action',
            render: (_, record) => (
                <Space size={20}>
                    <Button
                        onClick={() => Edit(record.id)}
                        type='primary'
                        icon={<EditOutlined />}>
                        Edit
                    </Button>
                    <Popconfirm
                        title={'Are you sure to delete this task?'}
                        description={'Delete the task '}
                        onConfirm={() => Delete(record.id)}>
                        <Button type='danger' icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
            />
        </div>
    );
};

FacilitiesTable.propTypes={
    data:PropTypes.array,
    deleteHandle:PropTypes.func
}

export default FacilitiesTable;