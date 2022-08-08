import { motion } from 'framer-motion'

const FoodTruck: React.FC = () => {
  const foodTruck = {
    wheels: { rotate: -360, transition: { repeat: Infinity, ease: 'linear', duration: 0.5 } },
    road: { x: 192, transition: { repeat: Infinity, ease: 'linear', duration: 2.5 } },
    mountains: { x: 185, transition: { repeat: Infinity, ease: 'linear', duration: 20 } }
  }

  return (
    <div className='relative w-[184px] overflow-hidden pt-6'>
      <motion.svg
        className='absolute top-0 right-0'
        animate={foodTruck.mountains}
        width='370'
        height='60'
        viewBox='0 0 370 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M52.7119 30.7495L45.1964 23.234M40.7254 18.7631L34.7577 12.7954L25.6435 21.9096L10.7338 7L0.999985 16.7338'
          stroke='#F9F9F9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M365.234 20.5L352.525 33.2085'
          stroke='#F9F9F9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M236.712 30.7495L229.196 23.234M224.725 18.7631L218.758 12.7954L209.643 21.9096L194.734 7L185 16.7338M181.234 20.5L168.525 33.2085'
          stroke='#F9F9F9'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M369 59L341 31.46M185 59L188.75 55.0325M252.601 15.1217L266.958 1L280.71 14.5256L302.852 36.3043L306 33.2085L308.5 30.7495L318.921 20.5M252.601 15.1217L257.979 20.5L263.357 15.1217M252.601 15.1217L248.5 19.1551M318.921 20.5L324.389 15.1217L329.857 20.5M318.921 20.5L324.389 25.9681M329.857 20.5L327.123 23.234M329.857 20.5L337.482 28M209.643 39.3955L218.758 48.4087L221.5 45.7115M209.643 39.3955L206.451 36.3043L203.445 39.4845L192.5 51.0649M209.643 39.3955L206.5 42.539L205.973 42.0117M278 17.2355L271.735 23.5L265.471 17.2355M244.082 23.5L236.712 30.7495L230.719 36.6443L224.725 42.539'
          stroke='#EEEEEE'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M185 59L157 31.46M1 59L4.75 55.0325M68.6007 15.1217L82.9584 1L96.7099 14.5256L118.852 36.3043L122 33.2085L124.5 30.7495L134.921 20.5M68.6007 15.1217L73.979 20.5L79.3572 15.1217M68.6007 15.1217L64.5 19.1551M134.921 20.5L140.389 15.1217L145.857 20.5M134.921 20.5L140.389 25.9681M145.857 20.5L143.123 23.234M145.857 20.5L153.482 28M25.6435 39.3955L34.7577 48.4087L37.5 45.7115M25.6435 39.3955L22.4512 36.3043L19.4455 39.4845L8.5 51.0649M25.6435 39.3955L22.5 42.539L21.9727 42.0117M94 17.2355L87.7355 23.5L81.471 17.2355M60.0825 23.5L40.7255 42.539'
          stroke='#EEEEEE'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </motion.svg>

      <motion.svg
        animate={foodTruck.road}
        className='absolute bottom-px right-0'
        width='378'
        height='2'
        viewBox='0 0 378 2'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M193 1L227 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M249 1L258 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M236 1L240 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M267 1L300 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M309 1L330 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M339 1L359 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M368 1L377 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M1 1L35 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M57 1L66 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M44 1L48 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M75 1L108 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M117 1L138 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M147 1L167 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M176 1L185 1' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
      </motion.svg>

      <svg
        className='mx-auto relative bottom-xs'
        width='120'
        height='98'
        viewBox='0 0 120 98'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.g
          animate={{
            y: [0, 1, 0],
            transition: { duration: 0.5, repeat: Infinity }
          }}
        >
          <path
            d='M27.55 47.9L29.375 49.725M31.2 51.55L29.375 49.725M29.375 49.725L24.5 54.5'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M50 31V36.5C50 39.5376 52.4624 42 55.5 42V42C58.5376 42 61 39.5376 61 36.5V31'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M61 31V36.5C61 39.5376 63.4624 42 66.5 42V42C69.5376 42 72 39.5376 72 36.5V31'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M72 31V36.5C72 39.5376 74.4624 42 77.5 42V42C80.5376 42 83 39.5376 83 36.5V31'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M83 31V36.5C83 39.5376 85.4624 42 88.5 42V42C91.5376 42 94 39.5376 94 36.5V31'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M94 31V36.5C94 39.5376 96.4624 42 99.5 42V42C102.538 42 105 39.5376 105 36.5V31'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M40 37H27H23.075M40 37V31M40 37V55.025M40 29V27.65C40 25.6342 41.6342 24 43.65 24H55.925M40 29H25.5265C24.0222 29 22.6451 29.844 21.9623 31.1845L19 37H23.075M40 29V31M40 31H51H116M116 31V28C116 25.9842 114.016 24 112 24H99M116 31V48M118 84H107M116 78V52M105 45V64.15H109.025V66C109.025 68.2091 107.234 70 105.025 70H58.575M40 55.025H23.075M40 55.025V64M23.075 55.025L12.125 60.5L4.94202 64.8098C3.7372 65.5327 3 66.8347 3 68.2398V70M23.075 55.025V37M3 70V82C3 83.1046 3.89543 84 5 84H8M3 70H7.125C8.22957 70 9.125 69.1046 9.125 68V66.975M81 84H44C41.9842 84 40 82.0158 40 80V68M54.275 70H50.975C48.7659 70 46.975 68.2091 46.975 66V64.15H101M50 60V37'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path d='M31 62H34.65' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path d='M117 55H118' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path d='M117 45H118' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path d='M20 33H23.65' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path d='M2 84H5.65' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path d='M29 33H40' stroke='black' strokeWidth='2' strokeLinecap='round' />
          <path
            d='M63.4 53.025H57.925L59.75 64.15H65.225L67.05 53.025H63.4ZM63.4 53.025V49.55L67.05 47.725'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M75 54.25C75 51.3505 77.3505 49 80.25 49H88.75C91.6495 49 94 51.3505 94 54.25V54.25C94 55.2165 93.2165 56 92.25 56H76.75C75.7835 56 75 55.2165 75 54.25V54.25Z'
            stroke='black'
            strokeWidth='2'
            strokeLinejoin='round'
          />
          <circle cx='77' cy='55' r='1' fill='black' />
          <circle cx='80' cy='53' r='1' fill='black' />
          <circle cx='79' cy='50' r='1' fill='black' />
          <circle cx='84' cy='54' r='1' fill='black' />
          <circle cx='83' cy='51' r='1' fill='black' />
          <circle cx='87' cy='50' r='1' fill='black' />
          <circle cx='88' cy='53' r='1' fill='black' />
          <circle cx='92' cy='55' r='1' fill='black' />
          <circle cx='91' cy='51' r='1' fill='black' />
          <path
            d='M73 57C73 56.4477 73.4477 56 74 56H95C95.5523 56 96 56.4477 96 57V60C96 62.2091 94.2091 64 92 64H77C74.7909 64 73 62.2091 73 60V57Z'
            stroke='black'
            strokeWidth='2'
            strokeLinejoin='round'
          />
          <path d='M74 60H84' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M93 60H95' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M74 56L95 56' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M48 37H107' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M67 24L82 24' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M38 84H45' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M1 78H10' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M105 78H119' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M36 78L40 78' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path
            d='M66 58C64 58 63.5469 57 62 57C60.4531 57 60.5 58 59 58'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M85 13C91.0751 13 96 19.0864 96 20.3037C96 20.8627 94.9615 22.4484 93.25 24'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M85 13C85 6.37258 79.1666 1 78 1C77.2401 1 74.5004 3.27928 72.6823 6.7'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M78.7985 13.2285C74.2168 8.71419 66.151 9.47658 65.3336 10.3062C64.5162 11.1358 64.1435 18.9432 68.7252 23.4575'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M86.5052 23.4575C88.0945 21.8917 89.0876 19.9296 89.6729 18M77.9406 12C78.9014 11.3539 79.9439 10.8706 81 10.5171M88 9.76682C88.9921 9.88242 89.6859 10.0921 89.8969 10.3062C90.0074 10.4183 90.1098 10.6581 90.1929 11'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M71 13C69.7127 13 69.6625 13.1368 68.5 13.5M62.6 24C60.3784 22.379 59 20.5909 59 19.9999C59 19.363 59.4674 18.7102 62 17'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </motion.g>
        <circle cx='23' cy='86' r='11' stroke='black' strokeWidth='2' />
        <circle cx='92' cy='86' r='11' stroke='black' strokeWidth='2' />
        <motion.path
          animate={foodTruck.wheels}
          d='M90.3333 81.2845C90.8546 81.1003 91.4156 81 92 81C94.7614 81 97 83.2386 97 86C97 88.7614 94.7614 91 92 91C89.2386 91 87 88.7614 87 86C87 85.4156 87.1003 84.8546 87.2845 84.3333'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <motion.path
          animate={foodTruck.wheels}
          d='M27.7155 84.3333C27.8997 84.8546 28 85.4156 28 86C28 88.7614 25.7614 91 23 91C20.2386 91 18 88.7614 18 86C18 83.2386 20.2386 81 23 81C23.5844 81 24.1454 81.1003 24.6667 81.2845'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default FoodTruck
