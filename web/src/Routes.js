import { Router, Route, Set, Private } from '@redwoodjs/router'

import CheckPointsLayout from 'src/layouts/CheckPointsLayout'
import LapsLayout from 'src/layouts/LapsLayout'
import LogsLayout from 'src/layouts/LogsLayout'
import ParksLayout from 'src/layouts/ParksLayout'
import RouteCheckPointsLayout from 'src/layouts/RouteCheckPointsLayout'
import RunsLayout from 'src/layouts/RunsLayout'
import UsersLayout from 'src/layouts/UsersLayout'

import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={CheckPointsLayout}>
        <Route path="/check-points/new" page={CheckPointNewCheckPointPage} name="newCheckPoint" />
        <Route path="/check-points/{id}/edit" page={CheckPointEditCheckPointPage} name="editCheckPoint" />
        <Route path="/check-points/{id}" page={CheckPointCheckPointPage} name="checkPoint" />
        <Route path="/check-points" page={CheckPointCheckPointsPage} name="checkPoints" />
      </Set>
      <Set wrap={RouteCheckPointsLayout}>
        <Route path="/route-check-points/new" page={RouteCheckPointNewRouteCheckPointPage} name="newRouteCheckPoint" />
        <Route path="/route-check-points/{id}/edit" page={RouteCheckPointEditRouteCheckPointPage} name="editRouteCheckPoint" />
        <Route path="/route-check-points/{id}" page={RouteCheckPointRouteCheckPointPage} name="routeCheckPoint" />
        <Route path="/route-check-points" page={RouteCheckPointRouteCheckPointsPage} name="routeCheckPoints" />
      </Set>
      <Set wrap={NavbarLayout}>
        <Private unauthenticated="home" roles="admin">
          <Set wrap={LapsLayout}>
            <Route path="/admin/laps/new" page={LapNewLapPage} name="newLap" />
            <Route path="/admin/laps/{id}/edit" page={LapEditLapPage} name="editLap" />
            <Route path="/admin/laps/{id}" page={LapLapPage} name="lap" />
            <Route path="/admin/laps" page={LapLapsPage} name="laps" />
          </Set>
          {/* <Set wrap={RouteScannersLayout}>
            <Route path="/admin/route-scanners/new" page={RouteScannerNewRouteScannerPage} name="newRouteScanner" />
            <Route path="/admin/route-scanners/{id}/edit" page={RouteScannerEditRouteScannerPage} name="editRouteScanner" />
            <Route path="/admin/route-scanners/{id}" page={RouteScannerRouteScannerPage} name="routeScanner" />
            <Route path="/admin/route-scanners" page={RouteScannerRouteScannersPage} name="routeScanners" />
          </Set> */}
          <Set wrap={LogsLayout}>
            <Route path="/admin/logs/new" page={LogNewLogPage} name="newLog" />
            <Route path="/admin/logs/{id}/edit" page={LogEditLogPage} name="editLog" />
            <Route path="/admin/logs/{id}" page={LogLogPage} name="log" />
            <Route path="/admin/logs" page={LogLogsPage} name="logs" />
          </Set>
          <Set wrap={ParksLayout}>
            <Route path="/admin/parks/new" page={ParkNewParkPage} name="newPark" />
            <Route path="/admin/parks/{id}/edit" page={ParkEditParkPage} name="editPark" />
            <Route path="/admin/parks/{id}" page={ParkParkPage} name="park" />
            <Route path="/admin/parks" page={ParkParksPage} name="parks" />
          </Set>

          <Set wrap={UsersLayout}>
            <Route path="/admin/users/new" page={AdminUserNewUserPage} name="newUser" />
            <Route path="/admin/users/{id:String}/edit" page={AdminUserEditUserPage} name="editUser" />
            <Route path="/admin/users/{id:String}" page={AdminUserUserPage} name="user" />
            <Route path="/admin/users" page={AdminUserUsersPage} name="users" />
          </Set>

          <Set wrap={RunsLayout}>
            <Route path="/admin/runs/new" page={AdminRunNewRunPage} name="newRun" />
            <Route path="/admin/runs/{id:String}/edit" page={AdminRunEditRunPage} name="editRun" />
            <Route path="/admin/runs/{id:String}" page={AdminRunRunPage} name="run" />
            <Route path="/admin/runs" page={AdminRunRunsPage} name="runs" />
          </Set>
        </Private>

        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

        <Route path="/" page={HomePage} name="home" />
        <Route path="/parks" page={ParksPage} name="parks" />
        <Route path="/blog-park/{id:String}" page={BlogParkPage} name="blogPark" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
