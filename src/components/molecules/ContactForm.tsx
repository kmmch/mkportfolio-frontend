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
            {/* お名前 */}
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor='name'>お名前</FormLabel>
                <Input
                    id='name'
                    placeholder='問合　太郎'
                    {...register('name', {
                        required: 'お名前を入力してください',
                    })}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            {/* メールアドレス */}
            <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor='email'>メールアドレス</FormLabel>
                <Input
                    id='email'
                    placeholder='abcd1234@example.com'
                    {...register('email', {
                        required: 'メールアドレスを入力してください',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                        },
                    })}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            {/* お問い合わせ内容 */}
            <FormControl isInvalid={errors.body}>
                <FormLabel htmlFor='body'>お問い合わせ内容</FormLabel>
                <Textarea
                    id='body'
                    placeholder='お問い合わせ内容を入力してください'
                    {...register('body', {
                        required: 'お問い合わせ内容を入力してください',
                    })}
                />
                <FormErrorMessage>
                    {errors.body && errors.body.message}
                </FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                Submit
            </Button>
      </form>
    );
});