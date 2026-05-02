import './Topbar.css'

function TopBar() {

  return (
    <div className="top-bar">
      <h1 className="home-button">
        <a href="/" className='link-box'>The Home Page</a>
        <a href="./about" className='link-box'>About Something</a>
        <a href="./someplace" className='link-box'>Goes Somewhere</a>
      </h1>
    </div>
  )
}

export default TopBar
