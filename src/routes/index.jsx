import React from 'react'
import { Route, Redirect, Switch, HashRouter as Router } from 'react-router-dom'
import App from '../containers/App'
import SuperviseOverview from '../containers/twoResponsibilities/superviseOverview'
import HolographicFile from '../containers/twoResponsibilities/holographicFile'
import HolographicFileList from '../containers/twoResponsibilities/holographicFileList'
import TwoResponsibilities from '../containers/twoResponsibilities'
import AbnormalWarning from '../containers/twoResponsibilities/abnormalWarning'
import FourForms from '../containers/twoResponsibilities/fourForms'
import WindSuJi from '../containers/WindSuJi'
import ThreeOutlay from '../containers/WindSuJi/threeOutlay'
import Process from '../containers/WindSuJi/threeOutlay/subPage/Process'
import Supervision from '../containers/WindSuJi/threeOutlay/subPage/supervision/Supervision'
import FourWindBus from '../containers/WindSuJi/fourWindBus'
import HolographicFileDetail from '../containers/twoResponsibilities/holographicFileDetail'

const routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} render={() => <Redirect to="/main" />} />
      <Route
        path="/main"
        render={props => (
          <App {...props}>
            <Switch>
              <Route
                path="/main"
                exact={true}
                render={() => <Redirect to="/main/tworesponsibilities" />}
              />
              {/*“两个责任”监管*/}
              <Route
                path="/main/tworesponsibilities"
                component={() => (
                  <TwoResponsibilities>
                    <Route
                      path="/main/tworesponsibilities"
                      exact={true}
                      render={() => <Redirect to="/main/tworesponsibilities/index" />}
                    />
                    {/*监管预览*/}
                    <Route path="/main/tworesponsibilities/index" component={SuperviseOverview} />
                    {/*全息档案*/}
                    <Route
                      path="/main/tworesponsibilities/holographicFile"
                      render={() => (
                        <Switch>
                          <Route
                            path="/main/tworesponsibilities/holographicFile"
                            exact={true}
                            component={HolographicFile}
                          />
                          <Route
                            path="/main/tworesponsibilities/holographicFile/list"
                            component={HolographicFileList}
                          />
                          <Route
                            path="/main/tworesponsibilities/holographicfile/detail"
                            component={HolographicFileDetail}
                          />
                        </Switch>
                      )}
                    />
                    {/*异常预警*/}
                    <Route
                      path="/main/tworesponsibilities/abnormalwarning"
                      component={AbnormalWarning}
                    />
                    {/*四种形态*/}
                    <Route path="/main/tworesponsibilities/fourforms" component={FourForms} />
                  </TwoResponsibilities>
                )}
              />
              {/*政风肃纪监管*/}
              <Route
                path="/main/windsuji"
                render={() => (
                  <WindSuJi>
                    <Route
                      path="/main/windsuji"
                      exact={true}
                      render={() => <Redirect to="/main/windsuji/index" />}
                    />
                    {/*监管预览-三公经费*/}
                    <Route path="/main/windsuji/index"
                           render={() => (
                             <Switch>
                               <Route
                                 path="/main/windsuji/index"
                                 exact={true}
                                 component={ThreeOutlay}
                               />
                               {/* 三公经费-审核流程 */}
                               <Route path="/main/windsuji/index/process" component={Process} />
                               {/* 三公经费-事项统计 */}
                               <Route path="/main/windsuji/index/supervision" component={Supervision} />
                             </Switch>
                           )}
                    />
                    {/*全息档案*/}
                    <Route path="/main/windsuji/fourwindbus" component={FourWindBus} />
                  </WindSuJi>
                )}
              />
            </Switch>
          </App>
        )}
      />
    </Switch>
  </Router>
)

export default routes
