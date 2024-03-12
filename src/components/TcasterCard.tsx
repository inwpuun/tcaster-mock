import { CircleWithNumber } from './CircleWithNumber'
import { FixScoreButton } from './FixScoreButton'

type TcasterCardProps = {
    logo?: string
    faculty?: string
    university?: string
    name?: string
    roundSeats?: number[]
}

export function TcasterCard(props: TcasterCardProps) {
    const { logo, faculty, university, name, roundSeats } = props
  return (
    <div className='flex flex-col w-[442px] pt-6 pl-5 pr-4 bg-white rounded-[5px] shadow-[0_2px_4px_0_rgba(0,0,0,0.3)]'>
        <div className='flex gap-5'>
            <img src={logo} alt="logo" className='w-[80px] h-[86px]' />
            <div className='flex flex-col gap-6 w-full'>
                <div className='flex flex-col gap-2 font-prompt w-full'>
                    <div className="flex justify-between w-full">
                    <p className='text-[#ff5a5a] font-semibold text-2xl'>{faculty}</p>
                        <img src="/heart.svg" alt="" />
                    </div>
                    <p className='font-medium text-[#9b9b9b] text-xl'>{name}</p>
                    
                </div>
                <p className='font-light text-[#9b9b9b] text-xl'>{university}</p>
            </div>
        </div>
        <div className='w-full h-0.5 border-b border-[#d8d8d8] mt-[22px] mb-[14px]' />
        <div className='flex gap-5 font-Prompt font-light text-[#5f5f5f] text-xl'>
            รอบที่เปิด
            <div className='flex gap-2'>
                {roundSeats?.map((item, index) => {
                    return <CircleWithNumber key={index} id={index + 1} disabled={item === -1} />
                })}
            </div>
        </div>
        <div className='flex justify-between font-Prompt font-semibold text-[#ff5a5a] text-base mt-3'>
            รอบที่ 4 : Admission
            <FixScoreButton>
                Fix Score
                <img src="/edit.svg" alt="edit" />
            </FixScoreButton>
        </div>
        <div className='flex justify-between items-start mt-[21px]'>
            <img src="/badge.svg" alt="badge" className='ml-[30px] mt-[14px]' />
            <div className='flex flex-col items-end'>
                <p className='font-light text-xs text-[#4a4a4a]'>คะแนนของคุณคือ</p>
                <p className='font-light text-[42px] text-[#4a4a4a]'>23,453</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-[14px]'>
            <div className='flex flex-col justify-center'>
                <p className='text-xl text-[#5f5f5f] text-center'>20,845</p>
                <p  className='text-xs text-[#5f5f5f] text-center'>คะแนนต่ำสุด 60</p>
            </div>
            <div className='w-0.5 h-[29px] border-r border-[#d8d8d8]' />
            <div className='flex flex-col justify-center'>
                <p className='text-xl text-[#5f5f5f] text-center'>21,345</p>
                <p  className='text-xs text-[#5f5f5f] text-center'>คะแนนเฉลี่ย 60</p>
            </div>
            <div className='w-0.5 h-[29px] border-r border-[#d8d8d8]' />
            <div className='flex flex-col justify-center'>
                <p className='text-xl text-[#5f5f5f] text-center'>23,415</p>
                <p className='text-xs text-[#5f5f5f] text-center'>คะแนนสูงสุด 60</p>
            </div>
        </div>
        <div className='w-full h-0.5 border-b border-[#d8d8d8] mt-[22px] mb-[14px]' />
        <div className='flex gap-[18px] font-light text-base text-[#48b6a3] items-center'>
            <div className='w-[9px] h-[14px] bg-[#48b6a3]' />
            ดูสัดส่วนคะแนน
        </div>
        <div className='w-full h-0.5 border-b border-[#d8d8d8] mt-[21px] mb-[14px]' />
        <div className='flex justify-between text-[#9b9b9b] text-xs font-light mb-[23px]'>
            <div className='flex gap-[7px] items-center'>
                <div className='w-[10px] h-[10px] bg-[#48b6a3]' />
                10 คนที่สนใจ
            </div>
            <button>
                <img src="/share.svg" alt="" />
            </button>
        </div>
    </div>
  )
}