import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker'
import store from './store'
import App from './Components/App'


class Main extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App/>
        </Provider>
      </div>
    )
  }
}

let app = (
  <Main></Main>
)

ReactDOM.render(app, document.getElementById('root'))
serviceWorker.unregister()