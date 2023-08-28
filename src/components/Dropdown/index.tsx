import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';

function Dropdown({ name, label, value, placeholder, options, register, setValue }: DropdownProps): JSX.Element {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedValue, setSelectedValue] = useState<DropdownOption | null>(options.find(({ _id }) => _id === value) || null);
    const ref = useRef<any>();

    const onOptionSelected = (option: DropdownOption) => {
        setSelectedValue(option);
        setValue && setValue(name, option?._id);
        setShowOptions(false);
    };

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div ref={ref} className='relative min-w-[200px] dropdown-select flex flex-col items-start justify-start max-w-full'>
            {label && <p className='text-sm pb-1'>{label}</p>}
            <div className='relative w-full rounded-md flex flex-row' onClick={() => setShowOptions(!showOptions)}>
                <input id={name} placeholder={placeholder} type='text' {...register?.(name)} disabled hidden />
                <p id={name} placeholder={placeholder} className={`p-2 text-sm w-full border-[0.5px] border-lightDark/70 rounded-md`}>
                    {selectedValue?.name || placeholder}
                </p>
                <span className='absolute right-0 -translate-y-1/2 top-1/2 px-2'>
                    {!showOptions ? <IoChevronDownOutline color='rgba(0,0,0,0.5)' /> : <IoChevronUpOutline color='rgba(0,0,0,0.5)' />}
                </span>
            </div>
            {showOptions && (
                <div className={`absolute max-h-[200px] overflow-y-auto z-50 border-[0.5px] bg-white border-lightDark/50 rounded-md mt-16 w-full`}>
                    {options &&
                        options.map(({ _id, name }) => (
                            <li
                                className={`${
                                    selectedValue?.name === name ? 'bg-primary text-white' : 'hover:bg-lightDark/5 hover:text-matteBlack '
                                } rounded-[0.25rem] list-none text-sm p-2 m-1 cursor-pointer`}
                                key={name}
                                value={name}
                                onClick={() => onOptionSelected({ _id, name })}
                            >
                                {name}
                            </li>
                        ))}
                </div>
            )}
        </div>
    );
}

interface DropdownProps {
    name: string;
    label: string;
    placeholder: string;
    options: DropdownOption[];
    value?: string;
    register?: any;
    setValue?: any;
}

export interface DropdownOption {
    _id: string | number;
    name: string;
}

export default Dropdown;
