const imageModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg}', { eager: true });

// Helper function to resolve the correct image URL from the imported modules.
// It normalizes the path to match the keys in imageModules.
export const getImageUrl = (path: string): string => {
  const correctedPath = path.replace('./assets/', '../assets/').replace('.assets/', '../assets/');
  
  const module = imageModules[correctedPath] as { default: string };
  if (module) {
    return module.default;
  }
  console.warn(`Image not found for path: ${path}`);
  return '';
};
