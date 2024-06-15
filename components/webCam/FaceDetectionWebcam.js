"use client";
import React, { useState, useRef, useEffect, ReactElement } from "react";
import axios from "axios";
import Webcam from "react-webcam";
//import "@/styles/WebcamCapture.css";
import Modal from "../modalOneci/Modal";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { axiosAuthapi } from "@/lib/axios";

/* interface faceDetectionWebcamProps {
  nni: string;
  type: string;
} */

/* const FaceDetectionWebcam = () => { */

const FaceDetectionWebcam =({
  nni,
  type,
}) => {
  const [match, setMatch] = useState("null");
  const [capturing, setCapturing] = useState(false);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null);
  const router = useRouter();

  const compareFaces = async () => {
    setLoading(true);
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const blob = await fetch(imageSrc).then((res) => res.blob());
        const file = new File([blob], "capture.png", { type: "image/png" });
        const formData = new FormData();
        formData.append("file", file);
        formData.append("path", "/konateh.png"); // Chemin de l'image de référence
        formData.append("nni", nni);
        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/api/compare",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          // alert(response.data.match);
          //  alert(response.data.match);

          if (response.data.match === true) {
            setMatch("match");
            setTimeout(() => {
              router.push("/imprime/" + nni + "?type=" + type);
            }, 3000);
          }
          if (response.data.match === false) {
            setMatch("no_match");
            setTimeout(() => {
              router.push("/");
            }, 3000);
          }
          //setMatch(response.data.match);

          if (response) {
            setLoading(false);
          }
          setCapturing(true);
          setTimeout(() => {
            setCapturing(false);
          }, 5000); // Empêche la capture pendant 5 secondes
        } catch (error) {
          console.error("Error uploading the file:", error);
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!capturing) {
        compareFaces();
      }
    }, 2000); // Vérifie toutes les 2 secondes

    return () => clearInterval(interval);
  }, [capturing]);


  return (
    <>
      <div className="flex flex-col items-center justify-center webcam-capture-container card pb-3">
        <Webcam
          className={`bloc  ${
            match == "match" || match == "no_match"
              ? "hidden"
              : "border-4 border-white"
          } `}
          audio={false}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={800}
          videoConstraints={{
            facingMode: "user",
          }}
        />

        <div>
          {match == "match" && (
            <>
              <div className="grid grid-cols-3">
                <div></div>
                <div>
                  <Image
                    width={130}
                    height={130}
                    style={{
                      cursor: "pointer",
                      width: "130px",
                      height: "130px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid  #f1a730",
                    }}
                    src="/success-check-mark-icon-animation-video.jpg"
                    alt="oneci"
                  />
                </div>
                <div></div>
              </div>
            </>
          )}

          {match == "no_match" && (
            <>
              <div className="grid grid-cols-3">
                <div></div>
                <div>
                  <Image
                    width={130}
                    height={130}
                    style={{
                      cursor: "pointer",
                      width: "130px",
                      height: "130px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid  #f1a730",
                    }}
                    src="/oups.jpg"
                    alt="oneci"
                  />
                </div>
                <div></div>
              </div>
            </>
          )}
          {loading ?? (
            <div className="flex flex-row gap-2  py-5">
              <div className="w-4 h-4 rounded-full bg-[#f1a730] animate-bounce [animation-delay:.7s]"></div>
              <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
              <div className="w-4 h-4 rounded-full bg-[#75d4c3] animate-bounce [animation-delay:.7s]"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FaceDetectionWebcam;
