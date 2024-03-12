import { ReactNode } from 'react'

type FixScoreButtonProps = {
    children: ReactNode
}

export function FixScoreButton(props: FixScoreButtonProps) {
    const { children } = props
    return (
        <button type='button' className='flex py-[7px] pr-2 pl-5 gap-3 font-medium text-xs text-[#ff5a5a] rounded-full border border-[#ff5a5a]'>{children}</button>
    )
}