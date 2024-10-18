import { Image } from '@chakra-ui/react';

const FotoComp = ({ src, alt, height, width }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      objectFit="cover"
      borderRadius="md"
      boxShadow="sm"
    />
  );
};

export default FotoComp;