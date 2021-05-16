import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { pages } from "./pages";

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/darcula.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

function App() {
  return (
    <div className="app">
      <Router>
        <section className="menu">
          <ul>
            {
              pages.map(page =>(
                <Link to={ page.to }>
                  <li>
                    <span>{ page.text }</span>      
                  </li>
                </Link>

              ))
            }
          </ul>
        </section>

        <section className="draw-area">
          <div className="shape">
          <Switch>
              {
                pages.map(page =>(
                  <Route path={ page.to } exact>
                    {
                      page.comp
                    }
                  </Route>
                ))
              }
            </Switch>
          </div>

          <div className="code">
            <div className="html">
              {
                pages.map(page =>(
                  <Route path={ page.to } exact>
                    <CodeMirror
                      autoScroll={ true }
                      autoCursor={ true }
                      value={ page.html }
                      options={{
                        mode: 'javascript',
                        theme: 'darcula',
                        lineNumbers: true
                      }}
                      onChange={(editor, data, value) => {
                      }}
                    />
                  </Route>
                ))
              }
            </div>
            <div className="style">
              {
                pages.map(page =>(
                  <Route path={ page.to } exact>
                    <CodeMirror
                      autoScroll={ true }
                      autoCursor={ true }
                      value={ page.style }
                      options={{
                        mode: 'javascript',
                        theme: 'darcula',
                        lineNumbers: true
                      }}
                      onChange={(editor, data, value) => {
                      }}
                    />
                  </Route>
                ))
              }
            </div>
          </div>
        </section>
      </Router>

    </div>
  );
}

export default App;
