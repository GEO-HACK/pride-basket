export type GalleryFolder = {
  id: string
  name: string
  slug: string
  description?: string
}

export type GalleryImage = {
  id: string
  publicId: string // Cloudinary public ID
  folder: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

// Define your gallery folders here
export const galleryFolders: GalleryFolder[] = [
  {
    id: "all",
    name: "All Photos",
    slug: "all",
    description: "View all gallery images",
  },
  {
    id: "program-launch",
    name: "Program Launch",
    slug: "program-launch",
    description: "Photos from our program launch event",
  },
  {
    id: "training-sessions",
    name: "Training Sessions",
    slug: "training-sessions",
    description: "Our players in action during training",
  },
  {
    id: "tournaments",
    name: "Tournaments",
    slug: "tournaments",
    description: "Competition highlights and tournament moments",
  },
  {
    id: "team-events",
    name: "Team Events",
    slug: "team-events",
    description: "Team building and community events",
  },
]

// Sample gallery data - Replace with your actual Cloudinary public IDs
// Format: "folder/image-name" or just "image-name" if in root
export const galleryImages: GalleryImage[] = [
  // Program Launch
  {
    id: "1",
    publicId: "daggopride/program-launch/launch-1",
    folder: "program-launch",
    alt: "Program launch ceremony",
    caption: "Official program launch ceremony 2025",
  },
  {
    id: "2",
    publicId: "daggopride/program-launch/launch-2",
    folder: "program-launch",
    alt: "Team photo at launch",
    caption: "Team gathering at the launch event",
  },
  {
    id: "3",
    publicId: "daggopride/program-launch/launch-3",
    folder: "program-launch",
    alt: "Coaches introduction",
    caption: "Meet our coaching staff",
  },
  
  // Training Sessions
  {
    id: "4",
    publicId: "daggopride/training-sessions/training-1",
    folder: "training-sessions",
    alt: "Players practicing drills",
    caption: "Intensive training session",
  },
  {
    id: "5",
    publicId: "daggopride/training-sessions/training-2",
    folder: "training-sessions",
    alt: "Shooting practice",
    caption: "Perfecting shooting techniques",
  },
  {
    id: "6",
    publicId: "daggopride/training-sessions/training-3",
    folder: "training-sessions",
    alt: "Team scrimmage",
    caption: "Practice game session",
  },

  // Tournaments
  {
    id: "7",
    publicId: "daggopride/tournaments/tournament-1",
    folder: "tournaments",
    alt: "Championship game",
    caption: "Competing in the regional championship",
  },
  {
    id: "8",
    publicId: "daggopride/tournaments/tournament-2",
    folder: "tournaments",
    alt: "Victory celebration",
    caption: "Celebrating our tournament win",
  },

  // Team Events
  {
    id: "9",
    publicId: "daggopride/team-events/event-1",
    folder: "team-events",
    alt: "Community outreach",
    caption: "Giving back to the community",
  },
  {
    id: "10",
    publicId: "daggopride/team-events/event-2",
    folder: "team-events",
    alt: "Team bonding activity",
    caption: "Building team spirit",
  },
]

// Helper function to get images by folder
export function getImagesByFolder(folderSlug: string): GalleryImage[] {
  if (folderSlug === "all") {
    return galleryImages
  }
  return galleryImages.filter((img) => img.folder === folderSlug)
}

// Helper function to get folder by slug
export function getFolderBySlug(slug: string): GalleryFolder | undefined {
  return galleryFolders.find((folder) => folder.slug === slug)
}
