import {Link} from 'react-router-dom'

const Missing = () => {
    return (
      <main className='Missing'>
        <h2>ページがねーや</h2>
        <p>無理だ、見つけられん。</p>
        <p>
          <Link to='/'>Homeに戻ろ〜</Link>
        </p>
      </main>
    )
  }
  
  export default Missing
  