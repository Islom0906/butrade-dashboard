import React, {useEffect} from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormInputEmail from "../../../@crema/core/Form/FormInputEmail";

const initialValueForm = {
    address_ru: "",
    address_uz: "",
    phone1: "",
    phone2: "",
    phone3: "",
    email: "",
    map: "",
    instagram: "",
    facebook: "",
    telegram: ""
};


const ContactPostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    // query-contact
    const {
        mutate: postContactMutate,
        data: postContact,
        isLoading: postContactLoading,
        isSuccess: postContactSuccess,
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
        isLoading: editContactLoading,
        data: editContactData,
        refetch: editContactRefetch,
        isSuccess: editContactSuccess,
    } = useQuery(["edit-contact", editId], () => apiService.getDataByID("/about/contact", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putContact,
        isLoading: putContactLoading,
        data: putData,
        isSuccess: putContactSuccess
    } = useMutation(({
                         url,
                         data,
                         id
                     }) => apiService.editData(url, data, id), {
        onSuccess: () => {
            message.success('Success')
        },
        onError: (error) => {
            for (let obj in error.response.data) {
                message.error(`${obj}: ${error.response.data[obj]}`)
            }
        }
    });

    // contact success
    useEffect(() => {
        if (putContactSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postContactSuccess || putContactSuccess) {

            navigate('/contact')
        }
    }, [postContact, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editContactRefetch();
        }
    }, [editId]);

    // if no edit contact
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit contact
    useEffect(() => {
        if (editContactSuccess) {


            const edit = {
                address_uz: editContactData.address_uz,
                address_ru: editContactData.address_ru,
                phone1: editContactData.phone1,
                phone2: editContactData.phone2,
                phone3: editContactData.phone3,
                email: editContactData.email,
                map: editContactData.map,
                facebook: editContactData.facebook.split('//')[1],
                instagram: editContactData.instagram.split('//')[1],
                telegram: editContactData.telegram.split('//')[1]
            }
            form.setFieldsValue(edit)
        }

        }, [editContactData])


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('address_ru', values.address_ru);
        formData.append('address_uz', values.address_uz);
        formData.append('phone1', values.phone1);
        formData.append('phone2', values.phone2);
        formData.append('phone3', values.phone3);
        formData.append('email', values.email);
        formData.append('map', values.map);
        formData.append('instagram', `https://${values.instagram}`);
        formData.append('facebook', `https://${values.facebook}`);
        formData.append('telegram', `https://${values.telegram}`);



        if (editContactData) {
            putContact({url: '/about/contact', data:formData, id: editId})
        } else {
            postContactMutate({url: "/about/contact/", data:formData});
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

            localStorage.setItem(
                'myFormValues',
                JSON.stringify(form.getFieldsValue()),
            );
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            localStorage.removeItem('editDataId')
            localStorage.removeItem('myFormValues')
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, []);


    return (
        <div>
            {(postContactLoading || editContactLoading || putContactLoading) ?
                <AppLoader/> :
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
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'Необходимо ввести адрес'}
                                label={'Адрес Ru'}
                                name={'address_ru'}
                            />
                        </Col>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'Address kiritish kerak'}
                                label={'Address Uz'}
                                name={'address_uz'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInputEmail
                                required={true}
                                required_text={'Требуется электронная почта'}
                                label={'Электронная почта 1'}
                                name={'email'}
                            />
                        </Col>

                    </Row>

                    <Row gutter={20}>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'Вам необходимо ввести номер телефона'}
                                label={'Номер телефона 1'}
                                name={'phone1'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInput

                                label={'Номер телефона 2'}
                                name={'phone2'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInput

                                label={'Номер телефона 3'}
                                name={'phone3'}
                            />

                        </Col>


                    </Row>

                    <Row gutter={20}>


                        <Col span={24}>
                            <FormInput
                                required={true}
                                required_text={'Введите ссылку на геолокацию'}
                                label={'Ссылка на геолокацию'}
                                name={'map'}
                            />
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                label="Facebook"
                                name="facebook"
                                rules={[{required: true, message: 'Требуется Facebook'}]}

                            >
                                <Input addonBefore={'https://'}/>
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Instagram"
                                name="instagram"
                                rules={[{required: true, message: 'Требуется Instagram'}]}
                            >
                                <Input addonBefore={'https://'}/>
                            </Form.Item>

                        </Col>

                    </Row>
                    <Row gutter={20}>
                        <Col span={24}>
                            <Form.Item
                                label="Telegram"
                                name="telegram"
                                rules={[{required: true, message: 'Требуется ссылка на Telegram'}]}
                            >
                                <Input addonBefore={'https://'}/>
                            </Form.Item>

                        </Col>


                    </Row>

                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editContactSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default ContactPostEdit;