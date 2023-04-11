import { cn } from '@/utils/cn'
import { CalendarItem } from '@/utils/types'

type Props = {
  day: CalendarItem
  isToday: boolean
  isPast: boolean
}

export const CalendarDay = ({ day, isToday, isPast }: Props) => {
  console.log(isPast)

  return (
    <div
      className={cn('snap-center rounded-lg', {
        'bg-gray-900 px-6 py-5 text-white': isToday,
        'bg-gray-50 px-4 py-3': !isToday,
        'bg-transparent ring-1 ring-gray-100': isPast
      })}
    >
      <div
        className={cn({
          'opacity-50': isPast,
          'space-y-2': isToday,
          'space-y-0.5': !isToday
        })}
      >
        <div className='flex items-center justify-between font-medium'>
          <div className={isToday ? 'text-white' : 'text-gray-300'}>
            {isToday && <span className='text-gray-400'>Today:</span>} {day.day}, {day.date}
          </div>
          <div className='flex items-center'>
            {isToday && (
              <a
                href={day.url}
                className='inline-flex h-6 items-center justify-center rounded bg-white px-2 text-sm font-semibold text-gray-900'
              >
                View menu
              </a>
            )}
          </div>
        </div>

        <div className='font-semibold'>{day.name}</div>
      </div>
    </div>
  )
}
