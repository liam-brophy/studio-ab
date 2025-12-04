# Projects Folder Structure

This folder is where you should place your project images.

## Organization

Each project should have its own numbered folder:
- `/projects/1/` - Project One images
- `/projects/2/` - Project Two images
- `/projects/3/` - Project Three images
- etc.

## Adding Images

For each project folder, add:
1. A `thumbnail.jpg` - Used in the projects list page
2. Multiple images (`image1.jpg`, `image2.jpg`, etc.) - Displayed on the project detail page

Example structure:
```
/public/projects/
  ├── 1/
  │   ├── thumbnail.jpg
  │   ├── image1.jpg
  │   ├── image2.jpg
  │   ├── image3.jpg
  │   └── image4.jpg
  ├── 2/
  │   ├── thumbnail.jpg
  │   ├── image1.jpg
  │   ├── image2.jpg
  │   └── image3.jpg
  └── 3/
      ├── thumbnail.jpg
      ├── image1.jpg
      ├── image2.jpg
      ├── image3.jpg
      ├── image4.jpg
      └── image5.jpg
```

## Supported Formats

- JPG/JPEG
- PNG
- WebP
- SVG

## Notes

- Images are automatically responsive and will scale to fit the viewport
- The site displays placeholder images when actual images are not found
- You can add more projects by creating new numbered folders and updating the project data in `/src/pages/Projects.jsx` and `/src/pages/ProjectDetail.jsx`
