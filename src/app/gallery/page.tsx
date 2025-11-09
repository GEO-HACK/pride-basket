import React from "react"
import MasonryGallery from "@/components/gallery/MasonryGallery"
import { listFolderImages } from "@/lib/cloudinary"
import { galleryImages, type GalleryImage } from "@/lib/galleryData"

export const revalidate = 60 // ISR: refresh list every 60s

const GalleryPage = async () => {
  // Fetch images from Cloudinary folder 'dagopride' (no categorization)
  let images: GalleryImage[]
  try {
    images = await listFolderImages("dagopride", 100)
  } catch (err) {
    console.error('Falling back to static gallery data due to Cloudinary error:', err)
    images = galleryImages
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-24 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Gallery</h1>
          
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
