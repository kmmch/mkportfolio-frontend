import { FC, memo, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import {
  Button,
  Center,
  Textarea
} from '@chakra-ui/react'

import { ControlledInput } from "../atoms/ContorolledInput";
import { ThanksMessage } from "../atoms/ThanksMessage";
import { useCsrfToken } from "../../hooks/useCsrfToken";
import { BACKEND_ORIGIN } from "../../config/settings";

export const ContactForm: FC = memo(() => {
    // お問合せフォームを表示するか、送信完了メッセージを表示するかを管理するステート
    // true: お問合せフォームを表示する
    // false: 送信完了メッセージを表示する
    const [visible, setVisible] = useState(true);

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
        values = {
            "webform_id": "custom_contact",
            "email": values.email,
            "name": values.name,
            "body": values.body,
        }

        const headers = {
            'X-CSRF-Token': csrf_token,
            'Content-Type': 'application/json' 
        }
        return new Promise<void>((resolve) => {
            setTimeout(async () => {
                await axios.post(
                    `${ BACKEND_ORIGIN }/webform_rest/submit`,
                    values,
                    {headers: headers},
                );
                resolve();
                setVisible(!visible);
            }, 1500)
        })
    }

    // お問合せのHTMLをレンダリング
    return (
        <>
        {!visible && <ThanksMessage />}
        {visible &&
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
                <Center>
                    <Button mt={4} w={'100%'} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                        Submit
                    </Button>
                </Center>
            </form>
        }
      </>
    );
});