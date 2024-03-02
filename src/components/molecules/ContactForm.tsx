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
    console.log(csrf_token);

    // お問合せを機能させるための準備
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();
    

    // お問合せが送信された時の動作
    function onSubmit(values: any) {
        const headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf_token
        }
        return new Promise<void>((resolve) => {
            setTimeout(async () => {
                // alert(JSON.stringify(values, null, 2));
                const response = await axios.post(
                    'https://api.mochiken.work/webform_rest/submit',
                    values,
                    {headers: headers});
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
                label='自己紹介'
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