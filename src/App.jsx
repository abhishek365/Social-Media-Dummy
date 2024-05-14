import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/postlistStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
