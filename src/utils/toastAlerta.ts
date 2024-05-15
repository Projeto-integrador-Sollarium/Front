import { toast } from 'react-toastify'
export function toastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {
        case 'sucesso':
            toast('🎉 Sucesso!Tudo pronto para brilhar como um sol!', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: 'bounce',
            });
            break;

        case 'info':
            toast('🌞 Informação!', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: 'bounce',
            });
            break;

        case 'erro':
            toast('😓 Oops! Parece que houve um pequeno eclipse, mas vamos resolver isso!', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: 'bounce',
            });
            break;

        default:
            toast('🤔 Parece que algo inesperado aconteceu.', {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                transition: 'bounce',
            });
            break;
    }
}
