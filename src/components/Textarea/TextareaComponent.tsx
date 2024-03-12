import React, { TextareaHTMLAttributes } from 'react'
import clsx from "clsx";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    rows: number,
    name?: string,
    textareaClassName?: string,
    placeholder?: string;
    label: string;
    labelClassName?: string;
}

const TextareaComponent: React.FC<TextareaProps> = ({
    rows,
    label,
    labelClassName,
    children,
    name,
    textareaClassName,
    placeholder,
    ...rest
}) => {
    return (
        <div className='mb-2'>
            <label
                className={clsx(
                    labelClassName === undefined || null
                        ? "block text-sm font-bold mb-2 text-tint-600"
                        : labelClassName
                )}
            >
                {label}
            </label>
            <textarea
                name={name}
                rows={rows}
                className={clsx(
                    textareaClassName === undefined || null
                        ? "border rounded w-full py-2 px-3 text-gray-500 placeholder-shown:text-gray-500" :
                        textareaClassName)}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}

export default TextareaComponent
