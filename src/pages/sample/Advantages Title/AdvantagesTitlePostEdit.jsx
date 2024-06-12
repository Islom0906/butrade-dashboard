import React, {useEffect} from 'react';
import {Button, Col, Form, message, Row} from "antd";
import {useMutation, useQuery} from "react-query";
import apiService from "../../../@crema/services/apis/api";
import {AppLoader} from "../../../@crema";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_DATA} from "../../../shared/constants/ActionTypes";
import FormInput from "../../../@crema/core/Form/FormInput";
import FormTextArea from "../../../@crema/core/Form/FormTextArea";

const initialValueForm = {

    title_ru: "",
    title_uz: "",
    sub_title_ru: "",
    sub_title_uz: "",
};


const AdvantagesTitlePostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    // query-advantage-title
    const {
        mutate: postAdvantageTitleMutate,
        data: postAdvantageTitle,
        isLoading: postAdvantageTitleLoading,
        isSuccess: postAdvantageTitleSuccess,
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
        isLoading: editAdvantageTitleLoading,
        data: editAdvantageTitleData,
        refetch: editAdvantageTitleRefetch,
        isSuccess: editAdvantageTitleSuccess,
    } = useQuery(["edit-advantage-title", editId], () => apiService.getDataByID("/about/advantage-title", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putAdvantageTitle,
        isLoading: putAdvantageTitleLoading,
        data: putData,
        isSuccess: putAdvantageTitleSuccess
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
                message.error(`${obj}: ${error.response.data[obj][0]}`)
            }
        }
    });
    // advantage-title success
    useEffect(() => {
        if (putAdvantageTitleSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postAdvantageTitleSuccess || putAdvantageTitleSuccess) {

            navigate('/advantage-title')
        }
    }, [postAdvantageTitle, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editAdvantageTitleRefetch();
        }
    }, [editId]);

    // if no edit advantage-title
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit advantage-title
    useEffect(() => {
        if (editAdvantageTitleSuccess) {


            const edit = {

                title_ru: editAdvantageTitleData.title_ru,
                title_uz: editAdvantageTitleData.title_uz,
                sub_title_ru: editAdvantageTitleData.sub_title_ru,
                sub_title_uz: editAdvantageTitleData.sub_title_uz,
            }


            form.setFieldsValue(edit)
        }

    }, [editAdvantageTitleData])


    const onFinish = (values) => {


        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('sub_title_ru', values.sub_title_ru);
        formData.append('sub_title_uz', values.sub_title_uz);


        if (editAdvantageTitleData) {
            putAdvantageTitle({url: '/about/advantage-title', data: formData, id: editId})
        } else {
            postAdvantageTitleMutate({url: "/about/advantage-title/", data: formData});
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
            {(postAdvantageTitleLoading || editAdvantageTitleLoading || putAdvantageTitleLoading) ?
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
                        <Col span={12}>
                            <FormInput
                                required={true}
                                required_text={'Необходимо ввести заголовок'}
                                label={'Title Ru'}
                                name={'title_ru'}
                            />

                        </Col>
                        <Col span={12}>
                            <FormInput
                                required={true}
                                required_text={'Sarlavha kiritish kerak'}
                                label={'Title Uz'}
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
                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editAdvantageTitleSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default AdvantagesTitlePostEdit;