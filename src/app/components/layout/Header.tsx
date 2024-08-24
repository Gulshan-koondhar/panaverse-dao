import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images//panaverse-logo.png";

import Wrapper from "../shared/Wrapper";
const Header = () => {
  return (
    <Wrapper>
      <header className="flex justify-between items-center bg-white sticky top-0 py-3 overflow-x-hidden">
        <div>
          <Image src={Logo} alt="Panaverse Dao" width={100} height={100} />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Courses">Courses</Link>
          </li>
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;
