import { createBrowserRouter } from 'react-router';
import { AppLayout } from '../components/AppLayout';
import { SplashScreen } from '../components/SplashScreen';
import { RoleSelection } from '../components/RoleSelection';
import { OnboardingResident1 } from '../components/OnboardingResident1';
import { OnboardingResident2 } from '../components/OnboardingResident2';
import { OnboardingResident3 } from '../components/OnboardingResident3';
import { OnboardingVolunteer1 } from '../components/OnboardingVolunteer1';
import { OnboardingVolunteer2 } from '../components/OnboardingVolunteer2';
import { OnboardingVolunteer3 } from '../components/OnboardingVolunteer3';
import { SignupResident } from '../components/SignupResident';
import { Login } from '../components/Login';
import { ResidentHome } from '../components/ResidentHome';
import { ResidentHomeEmpty } from '../components/ResidentHomeEmpty';
import { ResidentRequestHelp } from '../components/ResidentRequestHelp';
import { ResidentRequests } from '../components/ResidentRequests';
import { ResidentRequestsEmpty } from '../components/ResidentRequestsEmpty';
import { ResidentMap } from '../components/ResidentMap';
import { ResidentRequestDetailWaiting } from '../components/ResidentRequestDetailWaiting';
import { ResidentRequestDetailAccepted } from '../components/ResidentRequestDetailAccepted';
import { RequestSuccessConfirmation } from '../components/RequestSuccessConfirmation';
import { CancelRequestConfirmation } from '../components/CancelRequestConfirmation';
import { RequestCancelledSuccess } from '../components/RequestCancelledSuccess';
import { VolunteerHome } from '../components/VolunteerHome';
import { VolunteerHomeEmpty } from '../components/VolunteerHomeEmpty';
import { VolunteerRequests } from '../components/VolunteerRequests';
import { VolunteerRequestsEmpty } from '../components/VolunteerRequestsEmpty';
import { VolunteerMap } from '../components/VolunteerMap';
import { CommunityPointsDetail } from '../components/CommunityPointsDetail';
import { VolunteerTaskDetailOpen } from '../components/VolunteerTaskDetailOpen';
import { VolunteerTaskDetailAccepted } from '../components/VolunteerTaskDetailAccepted';
import { AcceptTaskConfirmation } from '../components/AcceptTaskConfirmation';
import { TaskAcceptedSuccess } from '../components/TaskAcceptedSuccess';
import { MarkDoneConfirmation } from '../components/MarkDoneConfirmation';
import { TaskCompletedSuccess } from '../components/TaskCompletedSuccess';
import { CantHelpConfirmation } from '../components/CantHelpConfirmation';
import { ProfileResident } from '../components/ProfileResident';
import { ProfileVolunteer } from '../components/ProfileVolunteer';
import { EditAddress } from '../components/EditAddress';
import { EditPersonalInfo } from '../components/EditPersonalInfo';
import { SupportFAQ } from '../components/SupportFAQ';
import { NotificationAccepted } from '../components/NotificationAccepted';
import { NotificationNewRequest } from '../components/NotificationNewRequest';
import { ErrorState } from '../components/ErrorState';
import { LoadingState } from '../components/LoadingState';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/splash',
    element: <SplashScreen />,
  },
  {
    path: '/role-selection',
    element: <RoleSelection />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignupResident />,
  },
  // Resident Onboarding
  {
    path: '/onboarding/resident/1',
    element: <OnboardingResident1 />,
  },
  {
    path: '/onboarding/resident/2',
    element: <OnboardingResident2 />,
  },
  {
    path: '/onboarding/resident/3',
    element: <OnboardingResident3 />,
  },
  // Volunteer Onboarding
  {
    path: '/onboarding/volunteer/1',
    element: <OnboardingVolunteer1 />,
  },
  {
    path: '/onboarding/volunteer/2',
    element: <OnboardingVolunteer2 />,
  },
  {
    path: '/onboarding/volunteer/3',
    element: <OnboardingVolunteer3 />,
  },
  // Resident Routes
  {
    path: '/resident/home',
    element: <ResidentHome />,
  },
  {
    path: '/resident/home-empty',
    element: <ResidentHomeEmpty />,
  },
  {
    path: '/resident/request-help',
    element: <ResidentRequestHelp />,
  },
  {
    path: '/resident/requests',
    element: <ResidentRequests />,
  },
  {
    path: '/resident/requests-empty',
    element: <ResidentRequestsEmpty />,
  },
  {
    path: '/resident/map',
    element: <ResidentMap />,
  },
  {
    path: '/resident/request/:id',
    element: <ResidentRequestDetailWaiting />,
  },
  {
    path: '/resident/request/:id/accepted',
    element: <ResidentRequestDetailAccepted />,
  },
  {
    path: '/resident/request-success',
    element: <RequestSuccessConfirmation />,
  },
  {
    path: '/resident/cancel-request',
    element: <CancelRequestConfirmation />,
  },
  {
    path: '/resident/request-cancelled',
    element: <RequestCancelledSuccess />,
  },
  {
    path: '/resident/notification',
    element: <NotificationAccepted />,
  },
  {
    path: '/resident/profile',
    element: <ProfileResident />,
  },
  // Volunteer Routes
  {
    path: '/volunteer/home',
    element: <VolunteerHome />,
  },
  {
    path: '/volunteer/home-empty',
    element: <VolunteerHomeEmpty />,
  },
  {
    path: '/volunteer/requests',
    element: <VolunteerRequests />,
  },
  {
    path: '/volunteer/requests-empty',
    element: <VolunteerRequestsEmpty />,
  },
  {
    path: '/volunteer/map',
    element: <VolunteerMap />,
  },
  {
    path: '/volunteer/task/:id',
    element: <VolunteerTaskDetailOpen />,
  },
  {
    path: '/volunteer/task/:id/accepted',
    element: <VolunteerTaskDetailAccepted />,
  },
  {
    path: '/volunteer/accept-task',
    element: <AcceptTaskConfirmation />,
  },
  {
    path: '/volunteer/task-accepted',
    element: <TaskAcceptedSuccess />,
  },
  {
    path: '/volunteer/mark-done',
    element: <MarkDoneConfirmation />,
  },
  {
    path: '/volunteer/task-completed',
    element: <TaskCompletedSuccess />,
  },
  {
    path: '/volunteer/cant-help',
    element: <CantHelpConfirmation />,
  },
  {
    path: '/volunteer/community-points',
    element: <CommunityPointsDetail />,
  },
  {
    path: '/volunteer/notification',
    element: <NotificationNewRequest />,
  },
  {
    path: '/volunteer/profile',
    element: <ProfileVolunteer />,
  },
  // Shared Routes
  {
    path: '/edit-personal-info',
    element: <EditPersonalInfo />,
  },
  {
    path: '/edit-address',
    element: <EditAddress />,
  },
  {
    path: '/support',
    element: <SupportFAQ />,
  },
  {
    path: '/error',
    element: <ErrorState />,
  },
  {
    path: '/loading',
    element: <LoadingState />,
  },
]);
