import { Image } from '@chakra-ui/react';

const FotoComp = ({ src, alt, height, m }) => {
  return (
    <Image
      src={src}
      alt={alt}
      borderRadius="md"
      boxShadow="sm"
      m={m}
    />
  );
};

export default FotoComp;