"use client"
import React from 'react'
import "@styles/globals.css";
import { useState } from 'react';
import Image from "next/image";
import apiClient from '@lib/axios/api';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VideoUpload() {
    const router = useRouter();
    const [thumbnail, setthumbnail] = useState(null);
    const [video, setvideo] = useState(null);
    const [loader, setloader] = useState(false);

    const handleImageChange = (e) => {
        const type = e.target.name
        const file = e.target.files[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = () => {
                const imageData = { file: file, preview: reader.result }
                if (type === "thumbnail") {
                    setthumbnail(imageData)
                }
            }
            reader.readAsDataURL(file)
        } else {
            toast.error("Please select an image file.", { autoClose: 3000, theme: "dark" })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setloader(true);

        const formElements = e.target.elements;

        const formDataToSend = new FormData();
        formDataToSend.append("video", video?.file);
        formDataToSend.append("thumbnail", thumbnail?.file);
        formDataToSend.append("title", formElements.title.value);
        formDataToSend.append("description", formElements.description.value);

        apiClient.post("/videos/upload", formDataToSend, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log("Upload successfully:", res.data);
                toast.success("upload successfully", { autoClose: 1000, theme: "dark" });
                setTimeout(() => {
                    router.push("/");
                }, 1000)
            })
            .catch((err) => {
                toast.error(`uploading failed: ${err.response.data.message}`, { autoClose: 3000, theme: "dark" });
            });
    };

    return (

        <div className='p-2 m-2 space-x-2'>
            <ToastContainer />
            <form onSubmit={handleSubmit} action="" method="post">
                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="title" className=' items-start'>TITLE</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c] items-center'>
                        <input type="text" name="title" id="title" title='title' placeholder='Title' className='w-full placeholder:text-[#6d6d6d] placeholder:text-left text-[#19FF1DFF]  ' required onFocus={(e) => {
                            setTimeout(() => {
                                e.target.classList.add("text-center");
                            }, 150);
                        }}
                            onBlur={(e) => {
                                e.target.classList.remove("text-center");
                            }}
                        />
                    </div>
                </div>

                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="description" className=' items-start'>DESCRIPTION</label>
                    </div>
                    <div className='border-[0.2px] border-[#535353] p-4 bg-[#1c1c1c]'>
                        <textarea name='description' id="description" title='description' placeholder='description' className='w-full placeholder:text-[#7d7d7d] placeholder:text-left text-[#19FF1DFF] ' onFocus={(e) => {
                            setTimeout(() => {
                                e.target.classList.add("text-center");
                            }, 150);
                        }}
                            onBlur={(e) => {
                                e.target.classList.remove("text-center");
                            }} />
                    </div>
                </div>

                <div className='flex md:justify-between md:flex-row flex-col'>
                    <div className='flex flex-col pb-5'>
                        <div className='flex justify-start pb-2'>
                            <label htmlFor="thumbnail" className=' items-start cursor-pointer'> {
                                thumbnail ? <Image src={thumbnail.preview} alt='thumbnail' width={200} height={200} /> : "Select THUMBNAIL"} </label>
                        </div>
                        <div>
                            <div><input type='file' name="thumbnail" id="thumbnail" title='thumbnail' accept='image/*' className='w-full hidden' onChange={handleImageChange} /></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col pb-5'>
                    <div className='flex justify-start pb-2'>
                        <label htmlFor="video" className='items-start cursor-pointer'>
                            {video ? (
                                <video width="200" height="150" controls className="rounded">
                                    <source src={video.preview} type={video.file.type} />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                "Select VIDEO"
                            )}
                        </label>
                    </div>
                    <div>
                        <div><input
                            type="file"
                            name="video"
                            id="video"
                            accept="video/*"
                            className="w-full hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file && file.type.startsWith('video/')) {
                                    setvideo({ file: file, preview: URL.createObjectURL(file) });
                                } else {
                                    toast.error("Please select a valid video file.", { autoClose: 3000, theme: "dark" });
                                }
                            }}
                        /></div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button type="submit" className='bg-[#7A1CAC] text-[#EBD3F8] px-4 py-2 rounded-md hover:bg-[#AD49E1] hover:text-[#EBD3F8]'>{loader ? "Uploading..." : "Upload"}</button>
                </div>
            </form>
        </div>
    )
}
