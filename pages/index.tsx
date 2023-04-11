import FoodTruck from '@/components/FoodTruck'
import { CalendarDay } from '@/components/CalendarDay'
import { CalendarItem } from '@/utils/types'
import { data } from 'data/april-2023'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  function getDayWithSuffix(day: number): String {
    if (day >= 11 && day <= 13) {
      return day + 'th'
    }
    switch (day % 10) {
      case 1:
        return day + 'st'
      case 2:
        return day + 'nd'
      case 3:
        return day + 'rd'
      default:
        return day + 'th'
    }
  }

  const getDate = new Date()
  const currentMonth = getDate.toLocaleDateString('en-US', { month: 'short' })
  const currentDay = Number(getDate.toLocaleDateString('en-US', { day: 'numeric' }))
  const formattedCurrentDay = getDayWithSuffix(currentDay)
  const formattedToday = `${currentMonth} ${formattedCurrentDay}`

  function getIsToday(day: CalendarItem) {
    return day.date === formattedToday
  }

  function getIsPast(day: CalendarItem) {
    const dayAsNumber = Number(day.date.split(' ')[1].slice(0, -2))
    return currentDay > dayAsNumber
  }

  return (
    <>
      <Head>
        <title>Sterling Ranch food trucks</title>
        <meta name='description' content='Sterling Ranch food trucks' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative h-screen snap-y overflow-y-scroll'>
        <div className='container max-w-lg space-y-3'>
          {data.map((day, index) => (
            <CalendarDay key={index} day={day} isToday={getIsToday(day)} isPast={getIsPast(day)} />
          ))}
        </div>

        <div className='fixed inset-x-0 bottom-0 flex h-[256px] items-end justify-center bg-gradient-to-t from-white via-white pb-3 pt-50'>
          <FoodTruck />
        </div>
      </main>
    </>
  )
}

export default Home
