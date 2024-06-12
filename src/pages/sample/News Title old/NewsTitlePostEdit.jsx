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
    sub_title_ru: "",
    sub_title_uz: "",
    sub_title_en: "",
};


const NewsTitlePostEdit = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const {editId} = useSelector(state => state.editData)
    const dispatch = useDispatch()


    // query-news-title
    const {
        mutate: postNewsTitleMutate,
        data: postNewsTitle,
        isLoading: postNewsTitleLoading,
        isSuccess: postNewsTitleSuccess,
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
        isLoading: editNewsTitleLoading,
        data: editNewsTitleData,
        refetch: editNewsTitleRefetch,
        isSuccess: editNewsTitleSuccess,
    } = useQuery(["edit-news-title", editId], () => apiService.getDataByID("/about/index-news-section", editId), {
        enabled: false
    });
    // put-query
    const {
        mutate: putNewsTitle,
        isLoading: putNewsTitleLoading,
        data: putData,
        isSuccess: putNewsTitleSuccess
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
    // news-title success
    useEffect(() => {
        if (putNewsTitleSuccess) {
            dispatch({type: EDIT_DATA, payload: ""})
        }

        if (postNewsTitleSuccess || putNewsTitleSuccess) {

            navigate('/news-title')
        }
    }, [postNewsTitle, putData])


    // if edit contact
    useEffect(() => {
        if (editId !== "") {
            editNewsTitleRefetch();
        }
    }, [editId]);

    // if no edit news-title
    useEffect(() => {
        if (editId === "") {
            form.setFieldsValue(initialValueForm)
        }
    }, []);


    //edit news-title
    useEffect(() => {
        if (editNewsTitleSuccess) {


            const edit = {

                title_ru: editNewsTitleData.title_ru,
                title_uz: editNewsTitleData.title_uz,
                title_en: editNewsTitleData.title_en,
                sub_title_ru: editNewsTitleData.sub_title_ru,
                sub_title_uz: editNewsTitleData.sub_title_uz,
                sub_title_en: editNewsTitleData.sub_title_en,
            }


            form.setFieldsValue(edit)
        }

    }, [editNewsTitleData])


    const onFinish = (values) => {

        const formData = new FormData();

        formData.append('title_ru', values.title_ru);
        formData.append('title_uz', values.title_uz);
        formData.append('title_en', values.title_en);
        formData.append('sub_title_ru', values.sub_title_ru);
        formData.append('sub_title_uz', values.sub_title_uz);
        formData.append('sub_title_en', values.sub_title_en);


        if (editNewsTitleData) {
            putNewsTitle({url: '/about/index-news-section', data: formData, id: editId})
        } else {
            postNewsTitleMutate({url: "/about/index-news-section/", data: formData});
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
            {(postNewsTitleLoading || editNewsTitleLoading || putNewsTitleLoading) ?
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
                        <Col span={24}>
                            <FormTextArea
                                required={true}
                                required_text={'An additional title is required'}
                                label={'Sub Title En'}
                                name={'sub_title_en'}
                            />

                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "20px"}}>
                        {
                            editNewsTitleSuccess ? 'Edit' : 'Add'
                        }
                    </Button>
                </Form>
            }
        </div>
    );
};

export default NewsTitlePostEdit;