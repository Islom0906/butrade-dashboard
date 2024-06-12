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
    title_en: "",
    text_ru: "",
    text_uz: "",
    text_en: "",
};


const FeedBackTitlePostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    // query-feedback-title
    const {
        mutate: postFeedbackTitleMutate,
        data: postFeedbackTitle,
        isLoading: postFeedbackTitleLoading,
        isSuccess: postFeedbackTitleSuccess,
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
        isLoading: editFeedbackTitleLoading,
        data: editFeedbackTitleData,
        refetch: editFeedbackTitleRefetch,
        isSuccess: editFeedbackTitleSuccess,
    } = useQuery(["edit-feedback-title", editId], () => apiService.getDataByID("/feedback-section-title", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putFeedbackTitle,
        isLoading: putFeedbackTitleLoading,
        data: putData,
        isSuccess: putFeedbackTitleSuccess
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
    // feedback-title success
    useEffect(() => {
        if (putFeedbackTitleSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postFeedbackTitleSuccess || putFeedbackTitleSuccess) {

            navigate('/feedback-title')
        }
    }, [postFeedbackTitle, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editFeedbackTitleRefetch();
        }
    }, [editId]);

    // if no edit feedback-title
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit feedback-title
    useEffect(() => {
        if (editFeedbackTitleSuccess) {


            const edit = {
                title_ru: editFeedbackTitleData.title_ru,
                title_uz: editFeedbackTitleData.title_uz,
                title_en: editFeedbackTitleData.title_en,
                text_ru: editFeedbackTitleData.text_ru,
                text_uz: editFeedbackTitleData.text_uz,
                text_en: editFeedbackTitleData.text_en,
            }


            form.setFieldsValue(edit)
        }

    }, [editFeedbackTitleData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('title_en', values.title_en);
        formData.append('text_ru', values.text_ru);
        formData.append('text_uz', values.text_uz);
        formData.append('text_en', values.text_en);


        if (editFeedbackTitleData) {
            putFeedbackTitle({url: '/feedback-section-title', data: formData, id: editId})
        } else {
            postFeedbackTitleMutate({url: "/feedback-section-title/", data: formData});
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
            {(postFeedbackTitleLoading || editFeedbackTitleLoading || putFeedbackTitleLoading) ?
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
                                required_text={'Необходимо ввести заголовок'}
                                label={'Title Ru'}
                                name={'title_ru'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'Sarlavha kiritish kerak'}
                                label={'Title Uz'}
                                name={'title_uz'}
                            />

                        </Col>
                        <Col span={8}>
                            <FormInput
                                required={true}
                                required_text={'A title must be entered'}
                                label={'Title En'}
                                name={'title_en'}
                            />

                        </Col>
                    </Row>
                    <Row gutter={20}>

                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'Требуется дополнительный заголовок'}
                                label={'Описание Ru'}
                                name={'text_ru'}
                            />

                        </Col>
                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'Qo\'shimcha sarlavha talab qilinadi'}
                                label={'Tavsif Uz'}
                                name={'text_uz'}
                            />


                        </Col>
                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'An additional title is required'}
                                label={'Description En'}
                                name={'text_en'}
                            />

                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editFeedbackTitleSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default FeedBackTitlePostEdit;