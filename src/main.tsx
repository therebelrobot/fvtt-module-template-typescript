import React from 'react'
import ReactDOM from 'react-dom'

console.log('Hello from tsx!')

const App = () => {
  return <p style={{position: 'fixed', bottom: 0, right: 100}}>Hello</p>
}

// This is the baseline hook in FoundryVTT for when the application is loaded.
Hooks.on("ready", () => {

  // inject react root
  $('body').append('<div id="template-module-react-root"></div>')

  // inject react application into react root
  ReactDOM.render(
    <App />,
    document.getElementById('template-module-react-root'),
  )
})
