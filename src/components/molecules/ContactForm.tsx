import { FC, memo } from "react";
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react'
import { ControlledInput } from "../atoms/ContorolledInput";

export const ContactForm: FC = memo(() => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()
    
    function onSubmit(values: any) {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 1500)
        })
    }
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