import { Router, Route, Set, Private } from '@redwoodjs/router'

import RouteCheckPointsLayout from 'src/layouts/RouteCheckPointsLayout'
import LapsLayout from 'src/layouts/LapsLayout'
import LogsLayout from 'src/layouts/LogsLayout'
import CheckPointsLayout from 'src/layouts/CheckPointsLayout'
import RunsLayout from 'src/layouts/RunsLayout'
import ParksLayout from 'src/layouts/ParksLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'
import TestLayout from './layouts/TestLayout/TestLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavbarLayout}>
        <Private unauthenticated="home" roles={['admin', 'user']}>
          <Private unauthenticated="home" roles="admin">
            <Set wrap={RouteCheckPointsLayout}>
              <Route path="/admin/route-check-points/new" page={RouteCheckPointNewRouteCheckPointPage} name="newRouteCheckPoint" />
              <Route path="/admin/route-check-points/{id}/edit" page={RouteCheckPointEditRouteCheckPointPage} name="editRouteCheckPoint" />
              <Route path="/admin/route-check-points/{id}" page={RouteCheckPointRouteCheckPointPage} name="routeCheckPoint" />
              <Route path="/admin/route-check-points" page={RouteCheckPointRouteCheckPointsPage} name="routeCheckPoints" />
            </Set>
            <Set wrap={LapsLayout}>
              <Route path="/admin/laps/new" page={LapNewLapPage} name="newLap" />
              <Route path="/admin/laps/{id}/edit" page={LapEditLapPage} name="editLap" />
              <Route path="/admin/laps/{id}" page={LapLapPage} name="lap" />
              <Route path="/admin/laps" page={LapLapsPage} name="laps" />
            </Set>
            <Set wrap={LogsLayout}>
              <Route path="/admin/logs/new" page={LogNewLogPage} name="newLog" />
              <Route path="/admin/logs/{id}/edit" page={LogEditLogPage} name="editLog" />
              <Route path="/admin/logs/{id}" page={LogLogPage} name="log" />
              <Route path="/admin/logs" page={LogLogsPage} name="logs" />
            </Set>
            <Set wrap={CheckPointsLayout}>
              <Route path="/admin/check-points/new" page={CheckPointNewCheckPointPage} name="newCheckPoint" />
              <Route path="/admin/check-points/{id}/edit" page={CheckPointEditCheckPointPage} name="editCheckPoint" />
              <Route path="/admin/check-points/{id}" page={CheckPointCheckPointPage} name="checkPoint" />
              <Route path="/admin/check-points" page={CheckPointCheckPointsPage} name="checkPoints" />
            </Set>
            <Set wrap={RunsLayout}>
              <Route path="/admin/runs/new" page={RunNewRunPage} name="newRun" />
              <Route path="/admin/runs/{id}/edit" page={RunEditRunPage} name="editRun" />
              <Route path="/admin/runs/{id}" page={RunRunPage} name="run" />
              <Route path="/admin/runs" page={RunRunsPage} name="runs" />
            </Set>
            <Set wrap={ParksLayout}>
              <Route path="/admin/parks/new" page={ParkNewParkPage} name="newPark" />
              <Route path="/admin/parks/{id}/edit" page={ParkEditParkPage} name="editPark" />
              <Route path="/admin/parks/{id}" page={ParkParkPage} name="park" />
              <Route path="/admin/parks" page={ParkParksPage} name="parks" />
            </Set>
            <Set wrap={UsersLayout}>
              <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
              <Route path="/admin/users/{id}/edit" page={UserEditUserPage} name="editUser" />
              <Route path="/admin/users/{id}" page={UserUserPage} name="user" />
              <Route path="/admin/users" page={UserUsersPage} name="users" />
            </Set>
          </Private>

          <Route path="/statistic" page={StatisticPage} name="statistic" />
          <Route path="/edit-profile" page={EditProfilePage} name="editProfile" />

        </Private>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Route path="/" page={HomePage} name="home" />
      <Route path="/blog-park/{id:String}" page={BlogParkPage} name="blogPark" />
      <Route path="/blog-parks" page={BlogParksPage} name="blogParks" />

      </Set>

      <Route notfound page={NotFoundPage} />

    </Router>
  )
}

export default Routes
