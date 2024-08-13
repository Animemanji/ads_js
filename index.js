import { useEffect, useState } from 'react';

export default function Ad() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    setImageSrc(`https://picsum.photos/345/200?random=${new Date().getTime()}`);
  }, []);

  return (
    <div>
      <h1>Your Ad</h1>
      <img src={imageSrc} alt="Random Image" />
    </div>
  );
}
