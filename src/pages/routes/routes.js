import { Route, Routes } from "react-router-dom";
import Gallery from "../gallery/gallery";
import Login from "../login/login";
import SignUp from "../signup/signup";
import Upload from "../upload/upload";

function RoutesOne() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/upload" element={<Upload />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>
  );
}

export default RoutesOne;
