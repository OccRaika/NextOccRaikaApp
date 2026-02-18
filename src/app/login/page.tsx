'use client'
import { useForm, FormProvider } from "react-hook-form";
import { Button } from 'primereact/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { PasswordCustom } from "../../shared/Form/PasswordCustom";
import { Toast } from 'primereact/toast';
import { useRef } from "react";
import { LoginSchema } from "../../helpers/yupLogin";
import { useAuthStore } from "../../store/authStore";

type DefaultType = {
    email: string,
    password: string
}

export default function Login() {

    const toast = useRef<Toast>(null);

    const defaultValues: DefaultType = {
        email: '',
        password: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(LoginSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: DefaultType) => {
        console.log(data);

    }

    return (
        <article className="w-ful h-full p-2 bg-fondo py-10">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-fluid space-y-5">
                    <div className='text-xl mb-10 text-amber-900' >Inicio de Sesión</div>
                    <div className="flex flex-col justify-center items-center">
                        <InputTextCustom name='email' id='email' label='Email' className="p-inputtext-lg max-w-64" />
                        <PasswordCustom name='password' id='password' label='Contraseña' className="p-inputtext-lg max-w-64" />
                    </div>
                    <div className='w-full m-auto max-w-64'>
                        <Button type="submit" label="Iniciar sesión" className={'mt-2'} outlined />
                    </div>
                    <section className='flex flex-col m-auto text-sm pt-6'>
                        <div>¿Perdiste tu&nbsp;
                            <a href='/usuario/registrar' className="underline text-blue-500">contraseña</a>
                            ?</div>
                        <div>¿No tienes cuenta?&nbsp;
                            <a href='/usuario/registrar' className="underline text-blue-500">Registrate.</a>
                        </div>
                    </section>
                </form>
            </FormProvider>
        </article>
    )
}
