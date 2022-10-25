import { Router, Route, Set, Private } from '@redwoodjs/router'

import ParksLayout from 'src/layouts/ParksLayout'
import RunsLayout from 'src/layouts/RunsLayout'
import ScannersLayout from 'src/layouts/ScannersLayout'
import UsersLayout from 'src/layouts/UsersLayout'

import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={RunsLayout}>
        <Route path="/runs/new" page={RunNewRunPage} name="newRun" />
        <Route path="/runs/{id:String}/edit" page={RunEditRunPage} name="editRun" />
        <Route path="/runs/{id:String}" page={RunRunPage} name="run" />
        <Route path="/runs" page={RunRunsPage} name="runs" />
      </Set>
      <Set wrap={ScannersLayout}>
        <Route path="/scanners/new" page={ScannerNewScannerPage} name="newScanner" />
        <Route path="/scanners/{id}/edit" page={ScannerEditScannerPage} name="editScanner" />
        <Route path="/scanners/{id}" page={ScannerScannerPage} name="scanner" />
        <Route path="/scanners" page={ScannerScannersPage} name="scanners" />
      </Set>
      <Set wrap={ParksLayout}>
        <Route path="/parks/new" page={ParkNewParkPage} name="newPark" />
        <Route path="/parks/{id}/edit" page={ParkEditParkPage} name="editPark" />
        <Route path="/parks/{id}" page={ParkParkPage} name="park" />
        <Route path="/parks" page={ParkParksPage} name="parks" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={NavbarLayout}>
        <Private unauthenticated="home" roles="admin">
          <Set wrap={ScannersLayout}>
            <Route path="/admin/scanners/new" page={AdminScannerNewScannerPage} name="newScanner" />
            <Route path="/admin/scanners/{id:String}/edit" page={AdminScannerEditScannerPage} name="editScanner" />
            <Route path="/admin/scanners/{id:String}" page={AdminScannerScannerPage} name="scanner" />
            <Route path="/admin/scanners" page={AdminScannerScannersPage} name="scanners" />
          </Set>
          <Set wrap={ParksLayout}>
            <Route path="/admin/parks/new" page={AdminParkNewParkPage} name="newPark" />
            <Route path="/admin/parks/{id:String}/edit" page={AdminParkEditParkPage} name="editPark" />
            <Route path="/admin/parks" page={AdminParkParksPage} name="parks" />
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
