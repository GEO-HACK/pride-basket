import { v2 as cloudinary } from 'cloudinary'
import type { GalleryImage } from './galleryData'

interface CloudinarySearchResource {
  asset_id?: string
  public_id: string
  folder?: string
  width?: number
  height?: number
  context?: {
    custom?: {
      caption?: string
    }
  }
}

// Configure Cloudinary using server-side environment variables
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
cloudinary.config({
  cloud_name: cloudName,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export const isCloudinaryConfigured = Boolean(
  cloudName && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET
)

export async function listFolderImages(folder: string, maxResults = 100): Promise<GalleryImage[]> {
  if (!isCloudinaryConfigured) {
    throw new Error('Cloudinary is not configured. Please set CLOUDINARY_CLOUD_NAME (or NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME), CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.')
  }
  // Search for assets in the given folder, newest first
  const res = await cloudinary.search
    .expression(`folder=${folder}`)
    .sort_by('created_at', 'desc')
    .max_results(maxResults)
    .execute()

  const resources: CloudinarySearchResource[] = (res as { resources?: CloudinarySearchResource[] }).resources || []
  return resources.map((r, idx) => ({
    id: r.asset_id || r.public_id || String(idx),
    publicId: r.public_id,
    folder: r.folder || folder,
    alt: r.public_id.split('/').pop()?.replace(/[-_]/g, ' ') || 'Gallery image',
    width: r.width,
    height: r.height,
    caption: r.context?.custom?.caption || '',
  }))
}
