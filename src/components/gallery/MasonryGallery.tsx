"use client"

import React, { useState } from "react"
import { CldImage } from "next-cloudinary"
import { GalleryImage } from "@/lib/galleryData"
import { X } from "lucide-react"

type Props = {
  images: GalleryImage[]
}

const MasonryGallery: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg">No images found in this folder yet.</p>
        <p className="text-gray-500 text-sm mt-2">Check back soon for updates!</p>
      </div>
    )
  }

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden bg-gray-100 hover:opacity-95 transition-opacity duration-200"
            onClick={() => setSelectedImage(image)}
          >
            <CldImage
              src={image.publicId}
              alt={image.alt}
              width={400}
              height={600}
              crop="fill"
              gravity="auto"
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div
            className="max-w-7xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <CldImage
              src={selectedImage.publicId}
              alt={selectedImage.alt}
              width={1200}
              height={1200}
              crop="limit"
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
            />
            {selectedImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-center">
                <p className="text-white text-base">{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default MasonryGallery
