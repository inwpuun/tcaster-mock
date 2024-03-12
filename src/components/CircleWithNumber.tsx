
export type CircleWithNumberProps = {
    id: number
    disabled?: boolean
}

export function CircleWithNumber(props: CircleWithNumberProps) {
    const { id, disabled } = props
    
    if (disabled) {
        return (
            <div className='flex justify-center items-center w-[29px] h-[29px] rounded-full bg-[#f3f3f3] font-Propmt text-medium text-lg text-white'>{id}</div>
        )
    }

    return (
<div className='flex justify-center items-center w-[29px] h-[29px] rounded-full bg-[#2ecc71] font-Propmt text-medium text-lg text-white'>{id}</div>
    )
}