import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScansLayout from 'src/layouts/ScansLayout'

import ScannersLayout from 'src/layouts/ScannersLayout'
import ParksLayout from 'src/layouts/ParksLayout'
import RunsLayout from 'src/layouts/RunsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavbarLayout}>
        <Private unauthenticated="home" roles={['admin', 'user']}>
          <Private unauthenticated="home" roles="admin">
            <Set wrap={ScannersLayout}>
              <Route path="/admin/scanners/new" page={ScannerNewScannerPage} name="newScanner" />
              <Route path="/admin/scanners/{id:Int}/edit" page={ScannerEditScannerPage} name="editScanner" />
              <Route path="/admin/scanners/{id:Int}" page={ScannerScannerPage} name="scanner" />
              <Route path="/admin/scanners" page={ScannerScannersPage} name="scanners" />
            </Set>
            <Set wrap={ScansLayout}>
              <Route path="/admin/scans/new" page={ScanNewScanPage} name="newScan" />
              <Route path="/admin/scans/{id}/edit" page={ScanEditScanPage} name="editScan" />
              <Route path="/admin/scans/{id}" page={ScanScanPage} name="scan" />
              <Route path="/admin/scans" page={ScanScansPage} name="scans" />
            </Set>
            <Set wrap={ParksLayout}>
              <Route path="/admin/parks/new" page={ParkNewParkPage} name="newPark" />
              <Route path="/admin/parks/{id:Int}/edit" page={ParkEditParkPage} name="editPark" />
              <Route path="/admin/parks/{id:Int}" page={ParkParkPage} name="park" />
              <Route path="/admin/parks" page={ParkParksPage} name="parks" />
            </Set>
            <Set wrap={UsersLayout}>
              <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
              <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
              <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
              <Route path="/admin/users" page={UserUsersPage} name="users" />
            </Set>
            <Set wrap={RunsLayout}>
              <Route path="/admin/runs/new" page={RunNewRunPage} name="newRun" />
              <Route path="/admin/runs/{id:Int}/edit" page={RunEditRunPage} name="editRun" />
              <Route path="/admin/runs/{id:Int}" page={RunRunPage} name="run" />
              <Route path="/admin/runs" page={RunRunsPage} name="runs" />
            </Set>
          </Private>

          <Route path="/statistic" page={StatisticPage} name="statistic" />

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
