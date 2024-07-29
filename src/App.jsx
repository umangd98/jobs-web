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
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
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
              <div className="flex gap-x-[30px] max-w-[1400px] mx-auto">
                <div className="max-lg:hidden">
      
                  <Sidebar />
                </div>
                <div className="w-full px-[10px] sm:px-[20px] md:px-[30px]">
                  <Routes>
                    <Route path="/add_job" element={<AddJob />} />
                    <Route path="/add_detail" element={<AddDetail />} />
                    <Route
                      path="/customize_interview"
                      element={<CustomizeInterview />}
                    />
                    <Route path="/senior_product" element={<SeniorProduct />} />
                    <Route path="/katherine_feg" element={<KathrineFeg />} />
                    {/* singin pages */}
                    <Route path="/signup_job_list"  element={<SignupJobList />} />
                    <Route path="/signin_job_detail" element={<SignInJobDet />} />
                    <Route path="/signin_job_detail/singcustomize" element={<SignCutomize />} />
                    <Route path="/signin_job_detail/singcustomize/job_listtwo" element={<SingJobListTwo />} />
                    <Route path ="/signin_job_detail/singcustomize/senior_developer" element={<SignSeniorDev />} /> 
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
