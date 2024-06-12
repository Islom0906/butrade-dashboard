import React, {useEffect, useState} from 'react';
import {Button, Col, Form, message, Row, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";


const initialValueForm = {
    image: [],
    title_uz: "",
    title_ru: "",
    sub_title_ru: "",
    sub_title_uz: "",

};


const AdvantagesPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);





    // query-advantages
    const {
        mutate: postAdvantagesMutate,
        data: postAdvantages,
        isLoading: postAdvantagesLoading,
        isSuccess: postAdvantagesSuccess,

    } = useMutation(({url, data}) => apiService.postData(url, data), {
        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });

    // query-edit
    const {
        isLoading: editAdvantagesLoading,
        data: editAdvantagesData,
        refetch: editAdvantagesRefetch,
        isSuccess: editAdvantagesSuccess,

    } = useQuery(["edit-advantages", editId], () => apiService.getDataByID("/about/advantages", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putAdvantages,
        isLoading: putAdvantagesLoading,
        data: putData,
        isSuccess: putAdvantagesSuccess
    } = useMutation(({
                         url, data, id
                     }) => apiService.editData(url, data, id), {
        onSuccess: () => {
            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });



    //                                              =====useEffect====

    // advantages success
    useEffect(() => {
        if (putAdvantagesSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postAdvantagesSuccess || putAdvantagesSuccess) {
            navigate('/advantage')
        }
    }, [postAdvantages, putData])

    // if edit advantages
    useEffect(() => {
        if (editId !== "") {
            editAdvantagesRefetch();
            console.log('render')
        }
    }, [editId]);

    // if no edit advantages
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit advantages
    useEffect(() => {
            const image = [
                {
                    uid: editAdvantagesData?.id,
                    name: editAdvantagesData?.id,
                    status: "done",
                    url: editAdvantagesData?.image
                }
            ]
        console.log(image)


        if (editAdvantagesSuccess) {

            const edit = {
                title_uz: editAdvantagesData?.title_uz,
                title_ru: editAdvantagesData?.title_ru,
                sub_title_ru: editAdvantagesData?.sub_title_ru,
                sub_title_uz: editAdvantagesData?.sub_title_uz,
                image,
            }

            setFileListProps(image);
            form.setFieldsValue(edit)
        }

    }, [editAdvantagesData])
    const onFinish = (values) => {

        const formData = new FormData()

        formData.append('title_uz', values.title_uz);
        formData.append('title_ru', values.title_ru);
        formData.append('sub_title_ru', values.sub_title_ru);
        formData.append('sub_title_uz', values.sub_title_uz);

        if (fileListProps[0]?.originFileObj) {
            formData.append('image', fileListProps[0]?.originFileObj);
        }

        if (editAdvantagesSuccess) {

            putAdvantages({url: "/about/advantages", data:formData, id: editId});
        } else {
            postAdvantagesMutate({url: "/about/advantages/", data:formData});
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    // refresh page again get data

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('myFormValues'));
        if (storedValues) {
            storedValues.images = []
            form.setFieldsValue(storedValues);
        }

        const handleBeforeUnload = () => {

            localStorage.setItem('myFormValues', JSON.stringify(form.getFieldsValue()),);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);


    const onChangeImage = ({fileList: newFileList}) => {

        setFileListProps(newFileList);
        form.setFieldsValue({image: newFileList});


    };


    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    return (<div>
        {(postAdvantagesLoading || editAdvantagesLoading || putAdvantagesLoading ) ? <AppLoader/> :
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 24
                }}
                wrapperCol={{
                    span: 24
                }}
                style={{
                    maxWidth: "100%"
                }}
                initialValues={initialValueForm}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >


                <Row gutter={20}>

                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Необходимо ввести заголовок'}
                            label={'Заголовок Ru'}
                            name={'title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'Sarlavha kiritish kerak'}
                            label={'Sarlavha Uz'}
                            name={'title_uz'}
                        />
                    </Col>
                </Row>
                <Row gutter={20}>

                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Требуется дополнительный заголовок'}
                            label={'Подзаголовок Ru'}
                            name={'sub_title_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Qo\'shimcha sarlavha talab qilinadi'}
                            label={'Qo\'shimcha Sarlavha Uz'}
                            name={'sub_title_uz'}
                        />
                    </Col>

                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label='Изображение'
                            name={'image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>


                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editAdvantagesSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default AdvantagesPostEdit;