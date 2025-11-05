# Gallery Setup Guide

## Cloudinary Configuration

### 1. Get Your Cloudinary Credentials

1. Sign up or log in at [cloudinary.com](https://cloudinary.com)
2. Go to your Dashboard
3. Copy your credentials:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

### 2. Update Environment Variables

Open `.env.local` and replace the placeholders:

```bash
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

### 3. Upload Images to Cloudinary

#### Option A: Via Cloudinary Dashboard
1. Go to Media Library in Cloudinary
2. Create folders matching your gallery structure:
   - `daggopride/program-launch/`
   - `daggopride/training-sessions/`
   - `daggopride/tournaments/`
   - `daggopride/team-events/`
3. Upload images to respective folders

#### Option B: Via Upload Widget
```javascript
// Images will be automatically optimized and served via CDN
```

### 4. Update Gallery Data

Edit `src/lib/galleryData.ts` and update the `publicId` values to match your uploaded images:

```typescript
{
  id: "1",
  publicId: "daggopride/program-launch/your-image-name", // ← Your actual image path
  folder: "program-launch",
  alt: "Your image description",
  caption: "Your caption",
}
```

## Folder Structure in Cloudinary

```
your-cloudinary-account/
└── daggopride/
    ├── program-launch/
    │   ├── launch-1.jpg
    │   ├── launch-2.jpg
    │   └── launch-3.jpg
    ├── training-sessions/
    │   ├── training-1.jpg
    │   └── training-2.jpg
    ├── tournaments/
    │   └── tournament-1.jpg
    └── team-events/
        └── event-1.jpg
```

## Adding New Folders

1. Add to `galleryFolders` array in `src/lib/galleryData.ts`:
```typescript
{
  id: "new-folder",
  name: "New Category",
  slug: "new-folder",
  description: "Description of the category",
}
```

2. Add images to `galleryImages` array with the matching folder slug

## Features

✅ Pinterest-style masonry layout (no rounded corners)
✅ Folder-based organization
✅ Responsive design
✅ Click to view full-size lightbox
✅ Automatic image optimization via Cloudinary
✅ Lazy loading for performance
✅ Hover captions
✅ Sticky filter navigation

## Access the Gallery

Visit: `http://localhost:3000/gallery`
