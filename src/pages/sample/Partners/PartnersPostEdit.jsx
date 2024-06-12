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



const initialValueForm = {
    images: [],
    title_uz: "",
    title_ru: "",

};


const PartnersPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);




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


    // query-partners
    const {
        mutate: postPartnersMutate,
        data: postPartners,
        isLoading: postPartnersLoading,
        isSuccess: postPartnersSuccess,

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
        isLoading: editPartnersLoading,
        data: editPartnersData,
        refetch: editPartnersRefetch,
        isSuccess: editPartnersSuccess,

    } = useQuery(["edit-partners", editId], () => apiService.getDataByID("/about/partners", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putPartners,
        isLoading: putPartnersLoading,
        data: putData,
        isSuccess: putPartnersSuccess
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

    // partners success
    useEffect(() => {
        if (putPartnersSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postPartnersSuccess || putPartnersSuccess) {
            navigate('/partners')
        }
    }, [postPartners, putData])

    // if edit partners
    useEffect(() => {
        if (editId !== "") {
            editPartnersRefetch();
        }
    }, [editId]);

    // if no edit partners
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit partners
    useEffect(() => {
        const images = [];
        if (editPartnersData !== undefined) {
            editPartnersData?.partner_images.map(image => {
                const data = {
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                images.push(data)
            })



        }

        if (editPartnersSuccess) {

            const edit = {
                title_uz: editPartnersData?.title_uz,
                title_ru: editPartnersData?.title_ru,
                images,
            }


            setFileListProps(images);
            form.setFieldsValue(edit)
        }

    }, [editPartnersData])
    const onFinish = (values) => {
        const images = []

        fileListProps.map(image => {
            images.push(image.uid)
        })

        const data = {
            images,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            sub_title_uz: values.sub_title_uz,
            sub_title_ru: values.sub_title_ru,
            sub_title_en: values.sub_title_en,
        };
        if (editPartnersSuccess) {

            putPartners({url: "/about/partners", data, id: editId});
        } else {
            postPartnersMutate({url: "/about/partners/", data});
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
        // images
        if (imagesUploadSuccess) {
            const initialImage = [...fileListProps]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({images: [uploadImg]});
            setFileListProps(initialImage);
        }

    }, [imagesUpload]);

    const onChangeImage = ({fileList: newFileList}) => {
        if (newFileList.length < fileListProps.length) {
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length - 1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
        }

    };



    const handleRemoveImage = (file) => {
        const withoutDeleteImage = []

        fileListProps.map((image) => {
            if (image?.uid !== file?.uid) {
                withoutDeleteImage.push(image)
            }
        })
        if (!withoutDeleteImage.length > 0) {
            form.setFieldsValue({images: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/about/images/delete", ids});
        setFileListProps(withoutDeleteImage)


    }



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
        {(postPartnersLoading || editPartnersLoading || putPartnersLoading || imagesUploadLoading) ? <AppLoader/> :
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
                        <Form.Item
                            label='Изображение'
                            name={'images'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={30}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 29 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>

                </Row>





                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editPartnersSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default PartnersPostEdit;