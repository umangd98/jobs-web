import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/FirmPovpages/Landing";
import SingupOne from "./Pages/FirmPovpages/SingupOne";
import SingupTwo from "./Pages/FirmPovpages/SingupTwo";
import AddJob from "./Pages/FirmPovpages/AddJob";
import AddDetail from "./Pages/FirmPovpages/AddDetail";
import CustomizeInterview from "./Pages/FirmPovpages/CustomizeInterview";
import SeniorProduct from "./Pages/FirmPovpages/SeniorProduct";
import KathrineFeg from "./Pages/FirmPovpages/KathrineFeg";
import Sidebar from "./components/Sidebar/Sidebar";
import SignupJobList from "./Pages/SignInPages/SignJobList";
import SignInJobDet from "./Pages/SignInPages/SignInJobDet";
import SignCutomize from "./Pages/SignInPages/SignCutomize";
import SignSeniorDev from "./Pages/SignInPages/SignSeniorDev";
import SingJobListTwo from "./Pages/SignInPages/SingJobListTwo";
import CandidateGetStarted from "./Pages/CandidatePovPages/CandidateGetStarted";
import CandiateUpload from "./Pages/CandidatePovPages/CandiateUpload";
import CandiateWelcom from "./Pages/CandidatePovPages/CandiateWelcom";
import CandiateLetsConfirm from "./Pages/CandidatePovPages/CandiateLetsConfirm";
import CandidateJustLittle from "./Pages/CandidatePovPages/CandidateJustLittle";
import CandidateLastThing from "./Pages/CandidatePovPages/CandidateLastThing";
import CandidateLookRight from "./Pages/CandidatePovPages/CandidateLookRight";
import CadidateReady from "./Pages/CandidatePovPages/CadidateReady";
import CandidateSwear from "./Pages/CandidatePovPages/CandidateSwear";
import CandidateEnd from "./Pages/CandidatePovPages/CandidateEnd";
import SideBarHeader from "./components/SideBarHeader";
import Navbar from "./components/Header/Nav";
import CandidateDetail from "./Pages/SignInPages/[id]";
import CandidateList from "./Pages/SignInPages/[CandidateList]";
import SignInJobList from "./Pages/SignInPages/SignJobList";
import CommingSoon from "./Pages/CommingSoon/CommingSoon";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
        <Route path="/signup_one" element={<SingupOne />} />
        <Route path="/signup_two" element={<SingupTwo />} />
        {/* Candidate pages */}
        <Route path="/pluto_getstarted" element={<CandidateGetStarted />} />
        <Route path="/candidate_upload_file" element={<CandiateUpload />} />
        <Route path="/welcome_to_pluto" element={<CandiateWelcom />} />
        <Route path="/let_confirm_it" element={<CandiateLetsConfirm />} />
        <Route path="/just_little_bite" element={<CandidateJustLittle />} />
        <Route path="/one_last_thing" element={<CandidateLastThing />} />
        <Route path="/look_right" element={<CandidateLookRight />} />
        <Route path="/ready" element={<CadidateReady />} />
        <Route path="/do_i_swear" element={<CandidateSwear />} />
        <Route path="/end" element={<CandidateEnd />} />

        <Route
          path="*"
          element={
            <div>
              <SideBarHeader />
              <div className="flex mx-auto">
                <div className="hidden lg:block pl-[0px]">
                  <Sidebar />
                </div>
                <div className="flex-grow p-4 lg:p-8 ">
                  <Routes>
                    <Route path="/add_job" element={<AddJob />} />
                    <Route path="/add_detail" element={<AddDetail />} />
                    <Route
                      path="/customize_interview"
                      element={<CustomizeInterview />}
                    />
                    <Route path="/senior_product" element={<SeniorProduct />} />
                    <Route path="/katherine_feg" element={<KathrineFeg />} />
                    {/* signin pages */}
                    <Route path="/signin_job_list" element={<SignInJobList />} />
                    <Route path="/candidate-list/:jobSlug" element={<CandidateList />} />
                    <Route path="/signin_job_detail" element={<SignInJobDet />} />
                    <Route path="/signin_job_detail/singcustomize" element={<SignCutomize />} />
                    <Route path="/signin_job_detail/singcustomize/job_listtwo" element={<SingJobListTwo />} />
                    <Route path="/candidate" element={<CandidateList />} />
                    <Route path="/candidate/:slug" element={<CandidateDetail />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
