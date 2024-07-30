import { motion } from "framer-motion";
import { MdArrowOutward, MdOutlineDashboard } from "react-icons/md";

const VisualizeCard = () => {
  const outlineVariants = {
    default: {
      strokeWidth: 0,
      pathLength: 0,
      stroke: "grey",
      transition: { duration: 0.8, ease: "easeOut" },
      opacity: 0.7,
    },
    hover: {
      strokeWidth: 1,
      pathLength: 0.3,
      stroke: "#2ebf91",
      transition: { duration: 1.8, ease: "easeOut" },
      opacity: 0.7,
    },
  };

  const colorChangeVariants = {
    default: {
      fill: "grey",
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },

    hover: {
      fill: "#2ebf91",
      top: 2,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      className="feature_card group grow relative overflow-hidden"
      onClick={() => {
        navigate("/visualize");
      }}
      whileHover="hover"
      initial="default"
      animate="default"
    >
      <div className="flex items-start gap-3">
        <div className=" h-[40px] aspect-square flex flex-col justify-center items-center rounded-lg shadow-md">
          <MdOutlineDashboard className=" h-[20px] w  text-[27px] text-brandGreen" />
        </div>

        <div className="flex flex-col gap-3">
          <p className=" md:text-[1.3em] md:leading-[1] pt-2 text-[19px] p font-bold leading-[1.4]  flex items-center  justify-between md:bg-transparent text-brandGreen ">
            Visualize
            <MdArrowOutward className="text-brandGreen text-[1.5rem] opacity-0 duration-200 transition-all ease-in-out group-hover:opacity-85 " />
          </p>
          <p className="text-defaultIconColor flex-[0_auto] w-full md:text-[1.13em] text-[15px] font-normal md:leading-[160%] leading-[1.4] no-underline block my-0 ">
            Transform complex data into actionable insights with our powerful
            visualization tools.
          </p>
        </div>
      </div>

      <motion.svg
        width="407"
        height="221"
        viewBox="0 0 407 221"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-[54px] -right-[90px] md:-right-[96px] h-[88%] w-[90%] max-w-[90%] md:w-[330px] opacity-50 duration-300 transition-all ease-in-out group-hover:opacity-100 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
      >
        <motion.path
          d="M76 154C76 153.204 76.3161 152.441 76.8787 151.879C77.4413 151.316 78.2044 151 79 151C79.7956 151 80.5587 151.316 81.1213 151.879C81.6839 152.441 82 153.204 82 154V163H76V154ZM100 146C100 145.204 100.316 144.441 100.879 143.879C101.441 143.316 102.204 143 103 143C103.796 143 104.559 143.316 105.121 143.879C105.684 144.441 106 145.204 106 146V163H100V146ZM124 126C124 125.204 124.316 124.441 124.879 123.879C125.441 123.316 126.204 123 127 123C127.796 123 128.559 123.316 129.121 123.879C129.684 124.441 130 125.204 130 126V163H124V126ZM148 106C148 105.204 148.316 104.441 148.879 103.879C149.441 103.316 150.204 103 151 103C151.796 103 152.559 103.316 153.121 103.879C153.684 104.441 154 105.204 154 106V163H148V106ZM172 110C172 109.204 172.316 108.441 172.879 107.879C173.441 107.316 174.204 107 175 107C175.796 107 176.559 107.316 177.121 107.879C177.684 108.441 178 109.204 178 110V163H172V110ZM196 114C196 113.204 196.316 112.441 196.879 111.879C197.441 111.316 198.204 111 199 111C199.796 111 200.559 111.316 201.121 111.879C201.684 112.441 202 113.204 202 114V163H196V114ZM220 108C220 107.204 220.316 106.441 220.879 105.879C221.441 105.316 222.204 105 223 105C223.796 105 224.559 105.316 225.121 105.879C225.684 106.441 226 107.204 226 108V163H220V108ZM244 102C244 101.204 244.316 100.441 244.879 99.8787C245.441 99.3161 246.204 99 247 99C247.796 99 248.559 99.3161 249.121 99.8787C249.684 100.441 250 101.204 250 102V163H244V102ZM268 94C268 93.2044 268.316 92.4413 268.879 91.8787C269.441 91.3161 270.204 91 271 91C271.796 91 272.559 91.3161 273.121 91.8787C273.684 92.4413 274 93.2044 274 94V163H268V94ZM292 86C292 85.2044 292.316 84.4413 292.879 83.8787C293.441 83.3161 294.204 83 295 83C295.796 83 296.559 83.3161 297.121 83.8787C297.684 84.4413 298 85.2044 298 86V163H292V86ZM316 74C316 73.2044 316.316 72.4413 316.879 71.8787C317.441 71.3161 318.204 71 319 71C319.796 71 320.559 71.3161 321.121 71.8787C321.684 72.4413 322 73.2044 322 74V163H316V74ZM340 50C340 49.2044 340.316 48.4413 340.879 47.8787C341.441 47.3161 342.204 47 343 47C343.796 47 344.559 47.3161 345.121 47.8787C345.684 48.4413 346 49.2044 346 50V163H340V50Z"
          variants={colorChangeVariants}
        />
        <motion.path
          d="M38.8 164C38.8 165.767 40.2327 167.2 42 167.2C43.7673 167.2 45.2 165.767 45.2 164C45.2 162.233 43.7673 160.8 42 160.8C40.2327 160.8 38.8 162.233 38.8 164ZM89.5989 140.085L89.0968 139.756L89.0968 139.756L89.5989 140.085ZM224.247 47.416L223.745 47.0875L223.744 47.0875L224.247 47.416ZM282.93 81.296L283.04 81.8858L283.04 81.8858L282.93 81.296ZM42 164.6C50.2683 164.6 60.1371 161.831 68.9943 157.447C77.8467 153.064 85.7745 147.025 90.1009 140.414L89.0968 139.756C84.9317 146.122 77.2108 152.04 68.4619 156.371C59.718 160.7 50.0331 163.4 42 163.4V164.6ZM90.1009 140.414C99.6175 125.871 102.911 109.169 106.841 96.2926C108.816 89.8205 110.939 84.3455 114.044 80.4884C117.118 76.6708 121.166 74.422 127.092 74.422V73.222C120.792 73.222 116.404 75.644 113.11 79.7358C109.847 83.788 107.671 89.4608 105.693 95.9424C101.717 108.973 98.4899 125.403 89.0968 139.756L90.1009 140.414ZM127.092 74.422C139.089 74.422 147.744 80.7666 155.814 87.2434C159.83 90.4668 163.721 93.7392 167.768 96.194C171.827 98.6564 176.092 100.329 180.886 100.329V99.129C176.387 99.129 172.339 97.5633 168.39 95.168C164.429 92.7653 160.618 89.561 156.565 86.3076C148.496 79.8309 139.547 73.222 127.092 73.222V74.422ZM180.886 100.329C185.636 100.329 189.366 99.2112 192.632 96.9531C195.881 94.7071 198.632 91.3602 201.48 86.9779C204.326 82.5977 207.305 77.1225 210.98 70.5977C214.66 64.0633 219.054 56.4474 224.749 47.7445L223.744 47.0875C218.029 55.8226 213.62 63.4648 209.934 70.0088C206.243 76.5622 203.292 81.9856 200.473 86.3241C197.656 90.6605 195.007 93.8526 191.95 95.966C188.91 98.0672 185.427 99.129 180.886 99.129V100.329ZM224.749 47.7445C227.571 43.4312 230.278 40.8378 232.86 39.5304C235.418 38.2351 237.895 38.1804 240.34 39.0307C242.809 39.8894 245.266 41.6797 247.721 44.112C250.171 46.5404 252.586 49.5748 254.976 52.8755C257.366 56.1763 259.716 59.7219 262.049 63.1762C264.377 66.624 266.687 69.9797 268.98 72.8721C271.269 75.7602 273.567 78.2196 275.881 79.8537C278.197 81.4895 280.593 82.342 283.04 81.8858L282.821 80.7062C280.812 81.0805 278.745 80.4073 276.573 78.8735C274.399 77.338 272.185 74.9838 269.92 72.1267C267.659 69.274 265.372 65.9529 263.043 62.5047C260.719 59.063 258.353 55.4932 255.948 52.1717C253.543 48.8501 251.084 45.7553 248.566 43.2596C246.051 40.768 243.444 38.8396 240.734 37.8973C238 36.9466 235.184 37.0085 232.318 38.4598C229.476 39.899 226.627 42.682 223.745 47.0875L224.749 47.7445ZM283.04 81.8858C287.821 80.9943 290.653 76.7119 293.431 71.2117C296.25 65.6304 299.079 58.6508 303.803 51.7401C308.51 44.8552 315.078 38.0814 325.315 33.023C335.557 27.9615 349.507 24.6 369 24.6V23.4C349.371 23.4 335.229 26.785 324.783 31.9472C314.331 37.1123 307.614 44.0393 302.813 51.0629C298.029 58.0607 295.125 65.1973 292.36 70.6707C289.555 76.2251 286.952 79.9357 282.82 80.7062L283.04 81.8858Z"
          variants={outlineVariants}
          strokeWidth="1"
          fill="none"
          stroke="grey"
        />
        <defs>
          <filter
            id="filter0_d_102_35"
            x="0.800781"
            y="0.400391"
            width="406.199"
            height="219.8"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="15" />
            <feGaussianBlur stdDeviation="19" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.941176 0 0 0 0 0.180392 0 0 0 0 0.396078 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_102_35"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_102_35"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

export default VisualizeCard;
