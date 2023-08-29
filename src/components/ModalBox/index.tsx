import { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

function ModalDialog({ children, title, isFooter, cancelLabel = 'Cancel', confirmLabel = 'Confirm', onCancel, onConfirm }: ModalDialogProps) {
    return (
        <div className='fixed bg-matteBlack/60 z-[999] left-0 top-0 w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-col w-[90%] md:w-2/3 xl:w-1/3 h-auto bg-white rounded-lg'>
                {/* Header  Section */}
                <section className='flex items-center justify-between w-full p-6 border-b-[1px] border-b-matteBlack/10'>
                    <p>{title}</p>
                    <IoClose className='hover:cursor-pointer' size={24} onClick={onCancel} />
                </section>
                {/* Body  Section */}
                <section className='flex-grow flex items-center justify-start w-full px-6 py-3'>{children}</section>
                {/* Footer  Section */}
                {isFooter && (
                    <section className='w-full p-6 flex justify-end'>
                        <div className='flex'>
                            <button className={`bg-transparent hover:bg-grey w-full m-1 px-3 py-2 rounded-md`} onClick={onCancel}>
                                <p className={`text-center text-primary uppercase text-sm font-normal tracking-wider`}>{cancelLabel}</p>
                            </button>
                            <button className={`bg-primary hover:bg-primary/80 w-full m-1 px-3 py-2 rounded-md`} onClick={onConfirm}>
                                <p className={`text-center text-white uppercase text-sm font-normal tracking-wider`}>{confirmLabel}</p>
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}

export default ModalDialog;

interface ModalDialogProps {
    children: JSX.Element;
    title: string;
    isFooter?: boolean;
    cancelLabel?: string;
    confirmLabel?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
}
