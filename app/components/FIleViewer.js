'use client'
import Image from "next/image";
import React, { useRef } from "react";

export default function FileViewer({ filePath,title }) {
    //Extract the file extension from the filePath
    const fileExtension = filePath.split('.').pop().toLowerCase();

    //check if the file is an image
    const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension);

    //Check if the file is a video
    const isVideo = ['mp4', 'webm', 'ogg'].includes(fileExtension);

    const videoRef = useRef(null);

    const handleToggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
    };

    return (
        <div>
            {isImage && <Image src={filePath} alt={`${title} Image`} width={500} height={500} className="rounded-md shadow-md mb-4" quality={100} />}
            {isVideo && (
                <video ref={videoRef} width={500} height={500} autoPlay loop muted className="rounded-md shadow-md mb-4 relative z-10" onClick={handleToggleMute}>
                    <source src={filePath} type={`video/${fileExtension}`} />
                    Your browser does not support video playback
                </video>
            )}
            {!isImage && !isVideo && <p>Unsupported file type</p>}
        </div>
    )
}