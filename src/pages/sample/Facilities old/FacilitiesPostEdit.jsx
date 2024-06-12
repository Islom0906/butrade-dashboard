import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Row, Select, Upload} from "antd";
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
    index_image: [],
    inner_image: [],
    is_index:false,
    title_uz: "",
    title_ru: "",
    title_en: "",
    sub_title_ru: "",
    sub_title_uz: "",
    sub_title_en: "",
};


const FacilitiesPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListPropsInner, setFileListPropsInner] = useState([]);
    const [fileListPropsIndex, setFileListPropsIndex] = useState([]);
    const [isUpload, setIsUpload] = useState('');





    // query-image
    const {
        mutate: imagesUploadMutate,
        data: imagesUpload,
        isLoading: imagesUploadLoading,
        isSuccess: imagesUploadSuccess,
    } = useMutation(({url, formData}) => apiService.postData(url, formData), {

        onSuccess: () => {

            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });


    // query-facilities
    const {
        mutate: postFacilitiesMutate,
        data: postFacilities,
        isLoading: postFacilitiesLoading,
        isSuccess: postFacilitiesSuccess,

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
        isLoading: editFacilitiesLoading,
        data: editFacilitiesData,
        refetch: editFacilitiesRefetch,
        isSuccess: editFacilitiesSuccess,

    } = useQuery(["edit-facilities", editId], () => apiService.getDataByID("/about/about-facilities", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putFacilities,
        isLoading: putFacilitiesLoading,
        data: putData,
        isSuccess: putFacilitiesSuccess
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

    // delete image

    const {mutate: imagesDeleteMutate} = useMutation(({url, ids}) => apiService.deleteImages(url, ids), {
        onSuccess: () => message.success('Success'),
        onError: (error) => message.error(error.message)
    });

    //                                              =====useEffect====

    // facilities success
    useEffect(() => {
        if (putFacilitiesSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postFacilitiesSuccess || putFacilitiesSuccess) {
            navigate('/facilities')
        }
    }, [postFacilities, putData])

    // if edit facilities
    useEffect(() => {
        if (editId !== "") {
            editFacilitiesRefetch();
        }
    }, [editId]);

    // if no edit facilities
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit facilities
    useEffect(() => {
        const inner_image = [{
            uid: editFacilitiesData?.inner_image?.id,
            name: editFacilitiesData?.inner_image?.id,
            status: 'done',
            url: editFacilitiesData?.inner_image?.image,
        }];

        const index_image = [{
            uid: editFacilitiesData?.index_image?.id,
            name: editFacilitiesData?.index_image?.id,
            status: 'done',
            url: editFacilitiesData?.index_image?.image,
        }];
        if (editFacilitiesSuccess) {

            const edit = {
                title_uz: editFacilitiesData?.title_uz,
                title_ru: editFacilitiesData?.title_ru,
                title_en: editFacilitiesData?.title_en,
                sub_title_ru: editFacilitiesData?.sub_title_ru,
                sub_title_uz: editFacilitiesData?.sub_title_uz,
                sub_title_en: editFacilitiesData?.sub_title_en,
                inner_image,
                index_image,
                is_index:editFacilitiesData?.is_index
            }


            setFileListPropsInner(inner_image);
            setFileListPropsIndex(index_image)
            form.setFieldsValue(edit)
        }

    }, [editFacilitiesData])
    const onFinish = (values) => {

        const data = {
            inner_image:fileListPropsInner[0]?.uid,
            index_image:fileListPropsIndex[0]?.uid,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            sub_title_ru: values.sub_title_ru,
            sub_title_uz: values.sub_title_uz,
            sub_title_en: values.sub_title_en,
            is_index: values.is_index,

        };
        if (editFacilitiesSuccess) {

            putFacilities({url: "about/about-facilities", data, id: editId});
        } else {
            postFacilitiesMutate({url: "about/about-facilities/", data});
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

    // image
    useEffect(() => {
        // inner
        if (imagesUploadSuccess&& isUpload === "inner") {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]

            form.setFieldsValue({inner_image: uploadImg});
            setFileListPropsInner(uploadImg);
            setIsUpload('')
            return
        }
        // index
        if (imagesUploadSuccess&& isUpload === "index") {
            const uploadImg = [{
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }]

            form.setFieldsValue({index_image: uploadImg});
            setFileListPropsIndex(uploadImg);
            setIsUpload('')
            return
        }
    }, [imagesUpload]);

    const onChangeImageInner = ({fileList: newFileList}) => {
        if (fileListPropsInner.length !== 0 || newFileList.length === 0) {
            form.setFieldsValue({inner_image: []});
            const id = [fileListPropsInner[0]?.uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "about/images/delete", ids});
            setFileListPropsInner([])
        }
        const formData = new FormData();

        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('inner')
        }
    };

    const onChangeImageIndex = ({fileList: newFileList}) => {
        if (fileListPropsIndex.length !== 0 || newFileList.length === 0) {
            form.setFieldsValue({index_image: []});
            const id = [fileListPropsIndex[0]?.uid];
            const ids = {
                image_ids: id
            }
            imagesDeleteMutate({url: "about/images/delete", ids});
            setFileListPropsIndex([])
        }
        const formData = new FormData();

        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[0].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload('index')
        }
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


// selection
    const optionAvailable = useMemo(() => {

        return [
            {
                value: true,
                label: 'В продаже',
            },
            {
                value: false,
                label: 'Нет в продаже',
            },
        ]
    }, []);





    return (<div>
        {(postFacilitiesLoading || editFacilitiesLoading || putFacilitiesLoading || imagesUploadLoading) ? <AppLoader/> :
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
                    <Col span={24}>
                        <FormInput
                            required={true}
                            required_text={'A title is required'}
                            label={'Title En'}
                            name={'title_en'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Необходимо ввести описание'}
                            label={'Подзаголовок Ru'}
                            name={'sub_title_ru'}
                        />
                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Tavsifi kiritish kerak'}
                            label={'Qo\'shimcha Sarlavha Uz'}
                            name={'sub_title_uz'}
                        />
                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'A description must be entered'}
                            label={'Sub Title En'}
                            name={'sub_title_en'}
                        />
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label={'Должна ли эта услуга появиться на главной странице?'}
                            name={'is_index'}
                            rules={[{
                                required: true, message: 'Вы должны выбрать'
                            }]}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                placeholder=''
                                optionLabelProp='label'
                                options={optionAvailable}
                            />
                        </Form.Item>

                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label='Изображение внутренний'
                            name={'inner_image'}
                            rules={[{required: true, message: 'Требуется изображение внутренний'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsInner}
                                    listType='picture-card'
                                    onChange={onChangeImageInner}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsInner.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Картинка для открыток'
                            name={'index_image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsIndex}
                                    listType='picture-card'
                                    onChange={onChangeImageIndex}
                                    onPreview={onPreview}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsIndex.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editFacilitiesSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default FacilitiesPostEdit;