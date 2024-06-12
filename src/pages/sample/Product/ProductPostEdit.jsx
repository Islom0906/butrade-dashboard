import React, {useEffect, useMemo, useState} from 'react';
import {Button, Col, Form, message, Row, Select, Typography, Upload} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import ImgCrop from "antd-img-crop";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";
import {MinusCircleOutlined} from "@ant-design/icons";


const {Title} = Typography

const initialValueForm = {
    title_uz: "",
    title_ru: "",
    text_ru: "",
    text_uz: "",
    is_available: true,
    category: null,
    characteristic: [
        {
            key_uz: "",
            key_ru: "",
            value_uz: "",
            value_ru: ""
        }
    ],
    image_ids: [],
    index_image: [],
};


const ProductPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    const [fileListProps, setFileListProps] = useState([]);
    const [fileListPropsIndex, setFileListPropsIndex] = useState([])
    const [isUpload, setIsUpload] = useState('');


// query-category
    const {data: categoryData, refetch: refetchTypes} = useQuery(
        'get-category',
        () => apiService.getData('/categories/')
    );
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


    // query-product
    const {
        mutate: postProductMutate,
        data: postProduct,
        isLoading: postProductLoading,
        isSuccess: postProductSuccess,

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
        isLoading: editProductLoading,
        data: editProductData,
        refetch: editProductRefetch,
        isSuccess: editProductSuccess,

    } = useQuery(["edit-product", editId], () => apiService.getDataByID("/products", editId), {
        enabled: false
    });


    // put-query
    const {
        mutate: putProduct,
        isLoading: putProductLoading,
        data: putData,
        isSuccess: putProductSuccess
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

    // product success
    useEffect(() => {
        if (putProductSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }
        if (postProductSuccess || putProductSuccess) {
            navigate('/product')
        }
    }, [postProduct, putData])

    // if edit product
    useEffect(() => {
        if (editId !== "") {
            editProductRefetch();
        }
    }, [editId]);

    // if no edit product
    useEffect(() => {
        refetchTypes()
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit product
    useEffect(() => {
        const image_ids = [];
        let index_image = []
        if (editProductData !== undefined) {
            editProductData.images.map(image => {
                const data = {
                    uid: image.id,
                    name: image.id,
                    status: "done",
                    url: image.image
                }
                image_ids.push(data)
            })

            index_image = [{
                uid: editProductData?.index_images?.id,
                name: editProductData?.index_images?.id,
                status: "done",
                url: editProductData?.index_images?.image
            }]
        }

        if (editProductSuccess) {
            const edit = {
                title_uz: editProductData?.title_uz,
                title_ru: editProductData?.title_ru,
                text_ru: editProductData?.text_ru,
                text_uz: editProductData?.text_uz,
                is_available: editProductData?.is_available,
                category: editProductData?.categories?.id,
                characteristic: editProductData?.characteristic,
                image_ids,
                index_image
            }


            setFileListProps(image_ids);
            setFileListPropsIndex(index_image)
            form.setFieldsValue(edit)
        }

    }, [editProductData])
    const onFinish = (values) => {
        const image_ids = []
        const index_image = []

        fileListProps.map(image => {
            image_ids.push(image.uid)
        })
        fileListPropsIndex.map(image => {
            index_image.push(image.uid)
        })

        const data = {
            image_ids,
            index_image: fileListPropsIndex[0]?.uid,
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            text_ru: values.text_ru,
            text_uz: values.text_uz,
            is_available: values.is_available,
            category: values.category,
            characteristic: values.characteristic,
        };
        if (editProductSuccess) {

            putProduct({url: "/products", data, id: editId});
        } else {
            postProductMutate({url: "/products/", data});
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
        if (imagesUploadSuccess && isUpload === 'images') {
            const initialImage = [...fileListProps]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({image_ids: [uploadImg]});
            setFileListProps(initialImage);
            setIsUpload("")
        }
        // main image
        if (imagesUploadSuccess && isUpload === "indexImage") {
            const initialImage = [...fileListPropsIndex]
            const uploadImg = {
                uid: imagesUpload?.images[0]?.id,
                name: imagesUpload?.images[0]?.id,
                status: "done",
                url: imagesUpload?.images[0]?.url
            }
            initialImage.push(uploadImg)
            form.setFieldsValue({index_image: [uploadImg]});
            setFileListPropsIndex(initialImage);
            setIsUpload("")
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
            setIsUpload("images")
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
            form.setFieldsValue({image_ids: []});
        }
        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/about/images/delete", ids});
        setFileListProps(withoutDeleteImage)


    }

    // index image
    const onChangeIndexImage = ({fileList: newFileList}) => {
        if (newFileList.length < fileListPropsIndex.length) {
            return
        }
        const formData = new FormData();
        if (newFileList.length !== 0) {
            formData.append("uploaded_images", newFileList[newFileList.length - 1].originFileObj);
            imagesUploadMutate({url: "/about/images/", formData});
            setIsUpload("indexImage")
        }

    };

    const handleRemoveIndexImage = (file) => {

        const ids = {
            image_ids: [file?.uid]
        }
        imagesDeleteMutate({url: "/about/images/delete", ids});
        setFileListPropsIndex([])
        form.setFieldsValue({index_image: []});


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


    // options
    // category
    const optionsCategory = useMemo(() => {
        return categoryData?.map((option) => {
            return {
                value: option?.id,
                label: option?.title_ru,
            };
        });
    }, [categoryData]);

    // Available
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
        {(postProductLoading || editProductLoading || putProductLoading || imagesUploadLoading) ? <AppLoader/> :
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
                            required_text={'Требуется описание'}
                            label={'Описание Ru'}
                            name={'text_ru'}
                        />

                    </Col>
                    <Col span={24}>
                        <FormTextArea
                            required={true}
                            required_text={'Tavsif kiritish kerak'}
                            label={'Tavsif Uz'}
                            name={'text_uz'}
                        />

                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col span={12}>
                        <Form.Item
                            label={'Выберите категория'}
                            name={'category'}
                            rules={[{
                                required: true, message: 'Категория должны быть выбраны'
                            }]}
                            wrapperCol={{
                                span: 24,
                            }}
                        >
                            <Select
                                style={{
                                    width: '100%',
                                }}
                                placeholder='Выберите одну категория'
                                optionLabelProp='label'
                                options={optionsCategory}
                            />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={'Доступно ли оно в настоящее время?'}
                            name={'is_available'}
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
                                placeholder='Выберите статус продажи'
                                optionLabelProp='label'
                                options={optionAvailable}
                            />
                        </Form.Item>

                    </Col>
                </Row>
                <Title level={3}>Характеристики</Title>
                <Form.List name="characteristic">
                    {(fields, {add, remove}) => (
                        <>
                            {fields.map((field, index) => {
                                return (
                                    <div key={field.fieldKey} style={{marginBottom: 20}}>
                                        <Row gutter={20}>

                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Должны быть включены функции'}
                                                    label={`Xususiyat nomi (Uzunlik*kenglik*balandlik,mm) Uz ${index + 1}`}
                                                    name={[field.name, 'key_uz']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Xususiyatlari kiritish kerak'}
                                                    label={`Xususiyat qiymati (4630×1910×1655) Uz ${index + 1}`}
                                                    name={[field.name, 'value_uz']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Features must be included'}
                                                    label={`Название характера (Длина*ширина*высота, мм) Ru ${index + 1}`}
                                                    name={[field.name, 'key_ru']}
                                                />
                                            </Col>
                                            <Col span={12}>
                                                <FormInput
                                                    required={true}
                                                    required_text={'Features must be included'}
                                                    label={`Характеристическое значение (4630×1910×1655) Ru ${index + 1}`}
                                                    name={[field.name, 'value_ru']}
                                                />
                                            </Col>

                                        </Row>
                                        <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                    </div>

                                );
                            })}
                            <Form.Item>
                                <Button type="primary" onClick={() => add()} block
                                        style={{backgroundColor: '#28a745'}}>
                                    Открыть новый раздел для характеристика
                                </Button>
                            </Form.Item>

                        </>
                    )}
                </Form.List>

                <Row gutter={20}>

                    <Col span={12}>
                        <Form.Item
                            label='Изображение'
                            name={'image_ids'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={4}
                                    fileList={fileListProps}
                                    listType='picture-card'
                                    onChange={onChangeImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListProps.length > 3 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Домашнее изображение'
                            name={'index_image'}
                            rules={[{required: true, message: 'Требуется изображение'}]}>
                            <ImgCrop>
                                <Upload
                                    maxCount={1}
                                    fileList={fileListPropsIndex}
                                    listType='picture-card'
                                    onChange={onChangeIndexImage}
                                    onPreview={onPreview}
                                    onRemove={handleRemoveIndexImage}
                                    beforeUpload={() => false}
                                >
                                    {fileListPropsIndex.length > 0 ? "" : "Upload"}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>

                </Row>


                <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                    {editProductSuccess ? 'Изменить' : 'Создать'}
                </Button>
            </Form>}
    </div>);
};

export default ProductPostEdit;