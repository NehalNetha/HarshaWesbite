import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get('file');

  const validFiles = ['3_routers_New.pkt', '2_Routers_Final.pkt', '2-LAN.pkt', 'exp_4_DNS_DHCP.pkt'];
  
  if (!validFiles.includes(fileName)) {
    return NextResponse.json({ error: 'Invalid file requested' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', fileName);
  const fileContents = await fs.readFile(filePath);

  return new NextResponse(fileContents, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    },
  });
}
