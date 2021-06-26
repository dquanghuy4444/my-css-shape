import './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { pages as pagesTemp , GROUP_PAGE } from "./pages";
import { isMobile } from './ultis';
import { useState } from 'react';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/rubyblue.css');
require('codemirror/theme/darcula.css');
require("codemirror/mode/css/css");
require('codemirror/mode/javascript/javascript.js');
require('./darcula.scss');
require('./theme.scss');

function App() {
  const isMobileDevice:boolean = isMobile();

  const [listPagesIsDisplayed , setListPagesIsDisplayed] = useState<boolean>(isMobileDevice ? false : true);
  const [activeGroupID , setActiveGroupID] = useState<number>(1);


  const sample = [
    {
      id:1,
      text: 'Features',
      to:"/features",
      pages:pagesTemp.filter(item => item.group === GROUP_PAGE.FEATURE).sort(function(a,b){
        return a.text.localeCompare(b.text);
      }),
      value:GROUP_PAGE.FEATURE
    },
    {
      id:2,
      text: 'Shapes',
      to:"/shapes",
      pages:pagesTemp.filter(item => item.group === GROUP_PAGE.SHAPE).sort(function(a,b){
        return a.text.localeCompare(b.text);
      }),
      value:GROUP_PAGE.SHAPE
    },
    {
      id:3,
      text: 'Tips',
      to:"/tips",
      pages:pagesTemp.filter(item => item.group === GROUP_PAGE.TIP).sort(function(a,b){
        return a.text.localeCompare(b.text);
      }),
      value:GROUP_PAGE.TIP
    }
  ]

  const pages = pagesTemp.sort(function(a,b){
    return a.text.localeCompare(b.text);
  })
 
  return (
    <Router>
      <div className="app">
        {
          (!listPagesIsDisplayed && isMobileDevice) && (
            <div className="btn-open" onClick={ () => setListPagesIsDisplayed(prev => !prev)} >
              <i></i>
            </div>
          )
        }
        <section className={"menu " + (listPagesIsDisplayed ? "" : "opacity-0")}>
          {
            isMobileDevice && (
              <div className="btn-close" onClick={ () => setListPagesIsDisplayed(prev => !prev) }>
                <span>&times;</span>
              </div>
            )
          }
          {
            sample.map(item => (
              <>
                <div className="group cursor-pointer" onClick={ () => setActiveGroupID((prev:number) => prev === item.id ? 0 : item.id) }>
                { item.text }
                </div>
                <ul className={ "sub-menu " + (activeGroupID === item.id ? "active" : "") }>
                  {
                    item.pages.map(page =>(
                      <Link to={ item.to + "/" + page.to }>
                        <li>
                          <span>{ page.text }</span>      
                        </li>
                      </Link>

                    ))
                  }
                </ul>
              </>
            ))
          }
        </section>

        <section className="draw-area">
          <div className="shape">
          <Switch>
              {
                pages.map(page =>(
                  <Route path={ sample.find(item => item.value === page.group)?.to + "/" + page.to } exact>
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
                  <Route path={ sample.find(item => item.value === page.group)?.to + "/" + page.to } exact>
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
                  <Route path={ sample.find(item => item.value === page.group)?.to + "/" + page.to } exact>
                    <CodeMirror
                      autoScroll={ true }
                      autoCursor={ true }
                      value={ page.style }
                      options={{
                        mode: 'css',
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
      </div>
    </Router>
  );
}

export default App;
