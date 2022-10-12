import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScannersLayout from 'src/layouts/ScannersLayout'
import ParksLayout from 'src/layouts/ParksLayout'
import RunsLayout from 'src/layouts/RunsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router>


      <Set wrap={NavbarLayout}>

        <Private unauthenticated="home" roles="admin">

          <Set wrap={ScannersLayout}>
            <Route path="/admin/scanners/new" page={AdminScannerNewScannerPage} name="newScanner" />
            <Route path="/admin/scanners/{id:Int}/edit" page={AdminScannerEditScannerPage} name="editScanner" />
            <Route path="/admin/scanners/{id:Int}" page={AdminScannerScannerPage} name="scanner" />
            <Route path="/admin/scanners" page={AdminScannerScannersPage} name="scanners" />
          </Set>
          <Set wrap={ParksLayout}>
            <Route path="/admin/parks/new" page={AdminParkNewParkPage} name="newPark" />
            <Route path="/admin/parks/{id:Int}/edit" page={AdminParkEditParkPage} name="editPark" />
            <Route path="/admin/parks/{id:Int}" page={AdminParkParkPage} name="park" />
            <Route path="/admin/parks" page={AdminParkParksPage} name="parks" />
          </Set>

          <Set wrap={UsersLayout}>
            <Route path="/admin/users/new" page={AdminUserNewUserPage} name="newUser" />
            <Route path="/admin/users/{id:Int}/edit" page={AdminUserEditUserPage} name="editUser" />
            <Route path="/admin/users/{id:Int}" page={AdminUserUserPage} name="user" />
            <Route path="/admin/users" page={AdminUserUsersPage} name="users" />
          </Set>

          <Set wrap={RunsLayout}>
            <Route path="/admin/runs/new" page={AdminRunNewRunPage} name="newRun" />
            <Route path="/admin/runs/{id:Int}/edit" page={AdminRunEditRunPage} name="editRun" />
            <Route path="/admin/runs/{id:Int}" page={AdminRunRunPage} name="run" />
            <Route path="/admin/runs" page={AdminRunRunsPage} name="runs" />
          </Set>

        </Private>

      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Route path="/" page={HomePage} name="home" />
      <Route path="/blog-park/{id:Int}" page={BlogParkPage} name="blogPark" />
      <Route path="/blog-parks" page={BlogParksPage} name="blogParks" />
      <Route path="/statistic" page={StatisticPage} name="statistic" />

      </Set>

      <Route notfound page={NotFoundPage} />

    </Router>
  )
}

export default Routes
