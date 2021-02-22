import { Image } from 'react-native';
import { Asset } from 'expo-asset';

import preloadImages from '../../assets/images';

// cache images
const cacheImages = images => {
  return Object.values(images).map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

// preload assets
const loadAssetAsync = async () => {
  const imageAssets = cacheImages(preloadImages);
  const fontAssets = loadFonts();

  return await Promise.all([...imageAssets]);
};

export default {
  loadAssetAsync
};
