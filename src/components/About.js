import React from 'react'

const About = () => {
  return (
    <div className='w-full flex items-center h-screen about-content px-3 pt-64 md:pt-32 lg:pt-0'>
      <div className='w-full max-w-[800px] mx-auto animate-bottom'>
        <div className='w-full flex flex-col'>
          <div className='flex justify-center font-bold uppercase text-2xl md:4xl'>
            <h1 className='border-b py-1 text-[var(--secondary)]'>About</h1>
          </div>
          <div className='py-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque pulvinar velit, ut vestibulum dui vehicula ac. In pharetra pharetra dignissim. Nullam eleifend est non pretium congue. Aliquam lacinia, metus vel facilisis porttitor, elit urna aliquam elit, vitae pharetra sapien quam in libero. Sed sagittis, libero a dictum congue, lorem ligula semper arcu, a egestas nibh elit tincidunt nunc. Etiam dapibus tempus efficitur. Duis diam nulla, iaculis et lacus sit amet, commodo condimentum felis. Vestibulum at sapien eget arcu consectetur laoreet.

Sed a diam commodo, molestie orci id, varius eros. Sed lacus tellus, auctor et faucibus sit amet, sodales sit amet erat. Proin sit amet porta risus. Suspendisse potenti. Sed vel augue nec tortor eleifend sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sapien ligula, auctor eget nisi ac, hendrerit dapibus leo. Sed sit amet nibh eu dolor rhoncus vehicula non non odio.

Curabitur quis pulvinar elit. Ut vitae odio in sapien luctus pretium et a neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit a erat id congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About