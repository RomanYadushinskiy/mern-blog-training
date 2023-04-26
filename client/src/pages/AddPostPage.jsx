import React from "react";

export const AddPostPage = () => {
    return (
        <form className="w-1/3 mx-auto py-10"
            onSubmit={(e) => e.preventDefault()}
        >
            <label className="text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
                Pin the image:
                <input type="file" className="hidden" />
            </label>

            <div className="flex object-cover py-2">
                IMAGE
            </div>

            <label className="text-xs text-white opacity-70">
                Post title:
                <input
                    type="text"
                    placeholder="Title"
                    className="mt-1 text-black w-full rounded-lg  bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
                />
            </label>

            <label className="text-xs text-white opacity-70">
                Post text:
                <textarea
                    placeholder="Post text"
                    className="mt-1 text-black w-full rounded-lg  bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-700"
                />
            </label>

            <div className="flex gap-8 items-center justify-center mt-4">
                <button className="flex items-center justify-center bg-gray-400 text-xs text-whitw rounded-sm py-2 px-4">
                    Add post
                </button>

                <button className="flex items-center justify-center bg-red-500 text-xs text-whitw rounded-sm py-2 px-4">
                    Cancel post
                </button>
            </div>

        </form>
    )
}