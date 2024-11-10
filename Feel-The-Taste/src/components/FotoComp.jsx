import { Image } from '@chakra-ui/react';

const FotoComp = ({ src, alt, height, width, m }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      objectFit="cover"
      borderRadius="md"
      boxShadow="sm"
      m={m}
    />
  );
};

export default FotoComp;