import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/redux-toolkit/store";
import { useSelector } from "react-redux";

const Logo: React.FC<ILogoProps> = ({ logo }) => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);

  return (
    <>
      {logo === "dark" ? (
        <div className="brand-logo">
          <Link href={`/${i18LangStatus}/booking`}>
            <Image
              src="/assets/images/icon/lbky-logo.png"
              alt=""
              className="img-fluid "
              width={90}
              height={39}
            />
            {/* <h1
              className=" fs-4 text-dark text-capitalize p-0 m-0"
              style={{ fontWeight: "900" }}
            >
              Lbyk Booking
            </h1> */}
          </Link>
        </div>
      ) : (
        <div className="brand-logo">
          <Link href={`/${i18LangStatus}/booking`}>
            {/* <h1
              className=" fs-4 text-light text-capitalize p-0 m-0"
              style={{ fontWeight: "900" }}
            >
              Lbyk Booking
            </h1> */}
            <Image
              src={"/assets/images/icon/lbky-logo.png"}
              alt="logo-clasic"
              className="img-fluid ed"
              width={90}
              height={39}
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default Logo;
