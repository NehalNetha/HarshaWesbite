export default function Home() {
    return (
      <div>
        <h1>Download Files</h1>
        <a href="/api/download?file=3_routers_New.pkt" download>
          Download 3 Routers New
        </a>
        <br />
        <a href="/api/download?file=2_Routers_Final.pkt" download>
          Download 2 Routers Final
        </a>
        <br />
        <a href="/api/download?file=2-LAN.pkt" download>
          Download 2-LAN
        </a>
        <br />
        <a href="/api/download?file=exp_4_DNS_DHCP.pkt" download>
          Download exp 4 DNS DHCP
        </a> 
        <a href="/api/download?file=crc.py" download>
          Download exp 4 DNS DHCP
        </a>
      </div>
    );
  }
  