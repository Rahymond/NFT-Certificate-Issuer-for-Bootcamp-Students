import Navbar from "@/components/Navbar";
import WalletConnect from "@/components/WalletConnect";
import CertificateForm from "@/components/CertificateForm";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <WalletConnect />
      </div>

     
      <div className="p-10">
        <CertificateForm />
      </div>
    </>
  );
}