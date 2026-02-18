'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputTextCustom } from "../../shared/Form/InputTextCustom";
import { Button } from "primereact/button";

import { PasswordCustom } from "../../shared/Form/PasswordCustom";
import { Toast } from 'primereact/toast';
import { useRef } from "react";
import { useAuthStore } from "../../store/authStore";
import { RegistroSchema } from "../../helpers/yupLogin";

type DefaultType = {
    email: string,
    password: string,
    confirmPassword: string,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string
}

export default function Registro() {
    const { jwt, setJWT } = useAuthStore();

    const toast = useRef<Toast>(null);
    const showError = (message: string) => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: message, life: 4000 });
    }

    const defaultValues: DefaultType = {
        email: '',
        password: '',
        confirmPassword: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    }

    const methods = useForm({
        mode: 'onTouched',
        resolver: yupResolver(RegistroSchema),
        defaultValues: defaultValues,
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: any) => {

    }
    return (
        <article className="w-full h-full p-2 bg-fondo py-10">
            <Toast ref={toast} />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className='text-xl text-center mb-5 text-amber-900' >Registro</div>
                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <InputTextCustom name='email' id='email' label='Correo Electrónico' className="max-w-64 mb-2.5 md:mr-1" />
                        <InputTextCustom name='nombre' id='nombre' label='Nombre' className="max-w-64 mb-2.5 md:ml-1" />
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <InputTextCustom name='apellidoPaterno' id='apellidoPaterno' label='Apellido Paterno' className="max-w-64 mb-2.5 md:mr-1" />
                        <InputTextCustom name='apellidoMaterno' id='apellidoMaterno' label='Apellido Materno' className="max-w-64 mb-2.5 md:ml-1" />
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center">
                        <PasswordCustom name='password' id='password' label='Contraseña' className="max-w-64 mb-2.5 md:mr-1" />
                        <PasswordCustom name='confirmPassword' id='confirmPassword' label='Confirmar Contraseña' className="max-w-64 mb-2.5 md:ml-1" />
                    </div>
                    <div className='w-full m-auto' style={{width:"235px"}}>
                        <Button type="submit" label="Registrarse" className={'mt-2'} outlined />
                    </div>
                </form>
            </FormProvider>
        </article>
    )
}
