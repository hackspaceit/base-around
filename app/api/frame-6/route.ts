import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  const text = message.input || '';
  let state = {
    page: 0,
  };
  try {
    state = JSON.parse(decodeURIComponent(message.state?.serialized));
  } catch (e) {
    console.error(e);
  }

  /**
   * Use this code to redirect to a different page
   */
  if (message?.button === 3) {
    return NextResponse.redirect(
      'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
      { status: 302 },
    );
  }


  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
            action: 'link',
            label: 'Join to Event',
            target: `https://lu.ma/82fvgfom?tk=cDUEj2`,
            
          },
          {
            action: 'link',
            label: 'Devfolio',
            target: 'https://based-sea.devfolio.co/?ref=b15c3254e7',
          },
         
      ],
     
      image: {
        src: `${NEXT_PUBLIC_URL}/ss7.png`,
        
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame-6`,

    }),
  );
}


export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';