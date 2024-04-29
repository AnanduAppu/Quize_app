import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import Clintcontex from "../../Clentcontex/Clientcontex";
function IntroPage() {
  const navigate = useNavigate();
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const {loading, setLoading} = useContext(Clintcontex)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      navigate("/quize");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);
  return (
    <div className="bg-black h-[100vh]">
    <div className="flex justify-center items-center h-screen">
    <div>
      <h1 className="text-white text-5xl text-center font-bold">Quizizz</h1>
      {!loading && (
        <div className="block">
          <RingLoader
            color={"#123abc"}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default IntroPage;
