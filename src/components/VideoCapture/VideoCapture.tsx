import React, { useState, useRef, useEffect } from "react";
import {
  BsRecordBtn,
  BsStopCircle,
  BsDownload,
  BsPause,
  BsPlay,
} from "react-icons/bs";
import ButtonComponent from "../Button/ButtonComponent";

type VideoCaptureProps = {
  onRecordStart?: () => void;
  onRecordStop?: () => void;
  onDownload?: (recordedChunks: Blob[]) => void;
};

const VideoCapture: React.FC<VideoCaptureProps> = ({
  onRecordStart,
  onRecordStop,
  onDownload,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  useEffect(() => {
    const startVideoCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          mediaRecorderRef.current = new MediaRecorder(stream, {
            mimeType: "video/webm; codecs=opus",
            audioBitsPerSecond: 320000,
          });
          mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
            if (event.data.size > 0) {
              setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
            }
          };

          mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(recordedChunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);
            if (videoRef.current) {
              videoRef.current.src = url;
              videoRef.current.addEventListener("loadedmetadata", () => {
                videoRef.current!.play();
              });
            }

            setIsRecording(false);
            setIsPaused(false);

            if (onRecordStop) {
              onRecordStop();
            }
          };
        }
      } catch (error) {
        const userPermission = window.confirm(
          "To use this feature, please grant permission to access your camera and microphone."
        );

        if (userPermission) {
          startVideoCapture();
        }
      }
    };

    startVideoCapture();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }

      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state === "recording"
      ) {
        mediaRecorderRef.current.stop();
      }
    };
  }, [recordedChunks]);

  const handleRecordClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.start();
        setIsRecording(true);
        setIsPaused(false);

        if (onRecordStart) {
          onRecordStart();
        }
      }
    } catch (error) {
      const userPermission = window.confirm(
        "To use this feature, please grant permission to access your camera and microphone."
      );

      if (userPermission) {
        handleRecordClick();
      }
    }
  };

  const handleStopClick = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  const handlePauseResumeClick = () => {
    if (mediaRecorderRef.current) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
      } else {
        mediaRecorderRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const getRecordedFile = (): Blob | null => {
    if (recordedChunks.length > 0) {
      return new Blob(recordedChunks, { type: "video/webm" });
    }
    return null;
  };

  const handleDownloadClick = () => {
    if (onDownload) {
      onDownload(recordedChunks);
    }

    // const blob = new Blob(recordedChunks, { type: "video/webm" });
    // const url = URL.createObjectURL(blob);

    // const a = document.createElement("a");
    // a.href = url;
    // a.download = "recorded-video.webm";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col items-center space-y-4 justify-self-end col-span-3">
      <div>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="mt-4 max-h-80 rounded-xl"
        />
      </div>
      <div className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quis, repellendus, sapiente architecto quaerat eius neque impedit sequi
        asperiores rerum officiis.
      </div>
      <div className="flex space-x-4 mt-2">
        {!isRecording && (
          <ButtonComponent
            onClick={handleRecordClick}
            type="button"
            disabled={isRecording}
            className={`p-4 rounded-full ${
              isRecording ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            <BsRecordBtn />
          </ButtonComponent>
        )}
        <ButtonComponent
          onClick={handlePauseResumeClick}
          type="button"
          disabled={!isRecording}
          className={`p-4 rounded-full ${
            isPaused ? "bg-yellow-500" : "bg-blue-500"
          } text-white`}
        >
          {isPaused ? <BsPlay /> : <BsPause />}
        </ButtonComponent>
        {isRecording && (
          <ButtonComponent
            onClick={handleStopClick}
            type="button"
            disabled={!isRecording}
            className="p-4 rounded-full bg-red-500 text-white"
          >
            <BsStopCircle />
          </ButtonComponent>
        )}
        <ButtonComponent
          onClick={handleDownloadClick}
          type="button"
          disabled={recordedChunks.length === 0}
          className="p-4 rounded-full bg-blue-500 text-white"
        >
          <BsDownload />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default VideoCapture;
