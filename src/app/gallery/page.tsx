"use client"

import React, { useState } from "react"
import { galleryFolders, getImagesByFolder } from "@/lib/galleryData"
import MasonryGallery from "@/components/gallery/MasonryGallery"

const GalleryPage = () => {
  const [activeFolder, setActiveFolder] = useState("all")
  const images = getImagesByFolder(activeFolder)
  const activeFolderData = galleryFolders.find((f) => f.slug === activeFolder)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Gallery
          </h1>
          <p className="text-gray-600 text-lg">
            {activeFolderData?.description || "Explore our photo collection"}
          </p>
        </div>
      </div>

      {/* Folder Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {galleryFolders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setActiveFolder(folder.slug)}
                className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFolder === folder.slug
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {folder.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MasonryGallery images={images} />
      </div>
    </div>
  )
}

export default GalleryPage
