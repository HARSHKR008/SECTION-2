import MyButton from '@/components/MyButton';
import Navbar from '@/components/Navbar';
import Threads from '@/components/Threads';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='font-bold text-center text-3xl'>
        My Home Page
      </h1>
      <MyButton>Submit</MyButton>
      <MyButton>Click me</MyButton>
      <MyButton>Explore</MyButton>
      <MyButton>Learn More..</MyButton>
      <div className='bg-black' style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
    </div>
  )
}

export default Home;