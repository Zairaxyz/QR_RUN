import { Router, Route, Set, Private } from '@redwoodjs/router'

import CheckpointsLayout from 'src/layouts/CheckpointsLayout'
import LapsLayout from 'src/layouts/LapsLayout'
import LogsLayout from 'src/layouts/LogsLayout'
import ParksLayout from 'src/layouts/ParksLayout'
import PathCheckpointsLayout from 'src/layouts/PathCheckpointsLayout'
import PathsLayout from 'src/layouts/PathsLayout'
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
      <Set wrap={LapsLayout}>
        <Route path="/laps/new" page={LapNewLapPage} name="newLap" />
        <Route path="/laps/{id}/edit" page={LapEditLapPage} name="editLap" />
        <Route path="/laps/{id}" page={LapLapPage} name="lap" />
        <Route path="/laps" page={LapLapsPage} name="laps" />
      </Set>
      {/* <Set wrap={CheckpointsLayout}>
        <Route path="/checkpoints/{id}" page={CheckpointCheckpointPage} name="checkpoint" />
        <Route path="/checkpoints" page={CheckpointCheckpointsPage} name="checkpoints" />
      </Set> */}
      <Set wrap={PathCheckpointsLayout}>
        <Route path="/path-checkpoints/new" page={PathCheckpointNewPathCheckpointPage} name="newPathCheckpoint" />
        <Route path="/path-checkpoints/{id}/edit" page={PathCheckpointEditPathCheckpointPage} name="editPathCheckpoint" />
        <Route path="/path-checkpoints/{id}" page={PathCheckpointPathCheckpointPage} name="pathCheckpoint" />
        <Route path="/path-checkpoints" page={PathCheckpointPathCheckpointsPage} name="pathCheckpoints" />
      </Set>
      <Set wrap={PathsLayout}>
        <Route path="/paths/new" page={PathNewPathPage} name="newPath" />
        <Route path="/paths/{id}/edit" page={PathEditPathPage} name="editPath" />
        <Route path="/paths/{id}" page={PathPathPage} name="path" />
        <Route path="/paths" page={PathPathsPage} name="paths" />
      </Set>
      <Set wrap={CheckpointsLayout}>
        <Route path="/checkpoints/new" page={CheckpointNewCheckpointPage} name="newCheckpoint" />
        <Route path="/checkpoints/{id}/edit" page={CheckpointEditCheckpointPage} name="editCheckpoint" />
        <Route path="/checkpoints/{id}" page={CheckpointCheckpointPage} name="checkpoint" />
        <Route path="/checkpoints" page={CheckpointCheckpointsPage} name="checkpoints" />
      </Set>
      {/* */}

      <Set wrap={NavbarLayout}>
        <Private unauthenticated="home" roles="admin">
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
        {/* <Route path="/parks" page={ParksPage} name="parks" /> */}
        <Route path="/blog-park/{id:String}" page={BlogParkPage} name="blogPark" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
