import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, [location.state, navigate]);

  return <>{location.state ? <span>{location.state.title}</span> : null}</>;
};

export default Detail;
