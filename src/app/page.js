'use client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <User name='john' />
      <User name='robin' /> */}
      <button onClick={() => { alert('hello world') }}>Click me !</button>
      <h1>Home Page</h1>
    </main>

  )
}


const User = (props) => {
  return (
    <div>
      <h2>User name: {props.name}</h2>
    </div>
  )
}
