import { FC, memo, useEffect } from "react";
import { useForm } from 'react-hook-form'
import {
  Button,
  Textarea
} from '@chakra-ui/react'

import { ControlledInput } from "../atoms/ContorolledInput";
import { useCsrfToken } from "../../hooks/useCsrfToken";
import axios from "axios";

export const ContactForm: FC = memo(() => {

    // CSRFトークン取得
    const { getCsrfToken, csrf_token } = useCsrfToken();
    useEffect(() => getCsrfToken(), []);

    // お問合せを機能させるための準備
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    

    // お問合せが送信された時の動作
    function onSubmit(values: any) {
        // has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.

        // has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
        values = {
            "webform_id": "custom_contact",
            "email": values.email
        }
        const headers = {
            'X-CSRF-Token': csrf_token,
            'Content-Type': 'application/json' 
        }
        return new Promise<void>((resolve) => {
            setTimeout(async () => {
                await axios.post(
                    'https://api.mochiken.work/webform_rest/submit',
                    values,
                    {headers: headers,},
                );
                resolve();
            }, 1500)
        })
    }

    // お問合せのHTMLをレンダリング
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput
                label='ユーザー名'
                errors={errors}
                isRequired
                {...register('name', {
                    required: 'お名前を入力してください',
                })}
            />
            <ControlledInput
                label='メールアドレス'
                type='email'
                errors={errors}
                isRequired
                {...register('email', {
                    required: 'メールアドレスを入力してください',
                })}
            />
            <ControlledInput
                label='お問い合わせ内容'
                errors={errors}
                as={Textarea}
                isRequired
                {...register('body', {
                    required: 'お問い合わせ内容を入力してください',
                })}
            />
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
      </form>
    );
});