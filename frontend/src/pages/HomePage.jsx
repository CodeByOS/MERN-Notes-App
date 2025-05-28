import { useState } from "react";
import Navbar from "../components/Navbar"

const HomePage = () => {
  const { rateLimited, setRateLimited } = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
    </div>
  )
}

export default HomePage