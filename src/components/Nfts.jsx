import { useEffect, useState } from "react";
import axios from "axios";

const Nfts = ({ page }) => {
  const [selectedPage, setselectedPage] = useState(1);
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];

      for (let i = 0; i < 10; i++) {
        const tokenId = i + 1 + (p - 1) * 10;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId: tokenId, metadata: response.data });
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  //2차함수로 작성해야한다 onclick이라서 p=i+1
  const onClickPage = (p) => () => {
    setselectedPage(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span>페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  useEffect(() => {
    console.log(nfts);
  }, []);

  useEffect(() => {
    getNfts(1);
  }, []);
  return (
    <div>
      <div>{pageComp()}</div>
    </div>
  );
};

export default Nfts;
