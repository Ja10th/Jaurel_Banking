import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

    const loggedIn = { firstName: 'Jamie', lastName: 'Oluwaleye', email:'Contact@jaurelb.com'}
  

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account transactions efficiently"
            />
        </header>
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.23}
        />
      </div>
      <RightSideBar user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance:500.30}]}
      />
    </section>
  )
}

export default Home