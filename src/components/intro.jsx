import { GiHeartWings } from "react-icons/gi";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div className="bg-gradient-to-b from-transparent to-red-400 pt-10 ">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-9xl truncate opacity-40">
          R E R A I S E
        </div>
        {/* px4? */}
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-black text-white flex justify-center items-center">
            Loading...
          </div>
          <div>
            <div className="mt-4 text-2xl font-bold flex items-center ">
              Kai's Reraise
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
                <GiHeartWings size={24} />
              </div>
            </div>
            <div className="mt-2 flex items-center text-gray-300">
              by
              <div className="text-main ml-2">{CONTRACT_ADDRESS}</div>
            </div>
            <div className="mt-2 text-gray-300">
              카이란 주식회사 리레이즈의 유머넘치는 코너 전용 딜러이며
              바퀴벌레랑 전쟁을 하다가 장렬히 회사를 잘 다니고 있는 슈퍼 울트라
              라이트 썬더 오메가 일렉트릭 어스퀘이크 토네이도 입니다.
            </div>
            <div className="py-4 text-center flex">
              <div>
                <div className="font-bold">{totalNft}</div>
                <div className="text-gray-300">총 NFT</div>
              </div>
              <div className="ml-4">
                <div className="font-bold">{mintedNft}</div>
                <div className="text-gray-300">발행된 NFT</div>
              </div>
              <div className="ml-4">
                <div className="font-bold">{myNft}</div>
                <div className="text-gray-300">내 NFT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
