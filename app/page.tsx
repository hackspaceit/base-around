import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Join to Event',
    },
    {
      label: `Read More`,
      target: `${NEXT_PUBLIC_URL}/api/frame-2`,
     
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/72.png`,
    aspectRatio: '1.91:1',
  },
 
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Base Around the World',
  description: 'Base Around the World Indonesia Hack Day',
  openGraph: {
    title: 'Base Around the World',
    description: 'Base Around the World Indonesia Hack Day',
    images: [`${NEXT_PUBLIC_URL}/indo.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Base Around the World Indonesia Hack Day Frame by Eldar Faaiz</h1>
    </>
  );
}
