import Image from "next/image";
import Logo from "@/assets/images/panaverse-logo.png";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="mt-32 border-t-2 border-slate-300 flex flex-col gap-4 px-2 py-8 sm:flex-row">
        <div className="max-w-screen-sm">
          <div className="space-y-4">
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" width={150} height={150} />
            </Link>
            <p className="font-light text-sm text-gray-700 ">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet
            </p>
            <div className=" font-light text-sm flex gap-4  text-gray-700 ">
              <p>facebook</p>
              <p>LinkedIn</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col mt-4 sm:flex-row">
          <div className="flex-1">
            <h1 className="font-bold text-lg">Programs</h1>
            <ul>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Web 3.0 and Metaverse Developer
                </li>
              </Link>
              <Link href={""}>
                <li className=" font-light text-sm my-4  text-gray-700 ">
                  Artificial Intelligence
                </li>
              </Link>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Cloud-Native Computing
                </li>
              </Link>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Ambient Computing and IoT
                </li>
              </Link>
              <Link href={""}>
                <li className=" font-light text-sm my-4  text-gray-700 ">
                  Genomics and Bioinformatics
                </li>
              </Link>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Network Programmability and Automation Pages
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-lg">Pages</h1>
            <ul>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Home
                </li>
              </Link>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Quarter I
                </li>
              </Link>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Quarter II
                </li>
              </Link>
              <Link href={""}>
                <li className="font-light text-sm my-4  text-gray-700 ">
                  Quarter III
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
