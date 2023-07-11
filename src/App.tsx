import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FixedSizeList from './virtuallist/FixedSizeList'

const Row = ({ index, style, forwardRef }) => {
  return (
    <div
      className={index % 2 ? 'list-item-odd' : 'list-item-even'}
      style={style}
      ref={forwardRef}
    >{`Row ${index}`}</div>
  )
}

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <FixedSizeList
        className="list"
        height={200}
        width={200}
        itemSize={50}
        itemCount={1000}
      > 
        {Row}
      </FixedSizeList>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
