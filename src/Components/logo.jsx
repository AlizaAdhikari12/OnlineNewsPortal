import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthernet } from "@fortawesome/free-solid-svg-icons";
const logo = () => {
  return (
    <div className="text-center italic font-bold text-5xl m-4">
      <FontAwesomeIcon icon={faEthernet}></FontAwesomeIcon>
      The Trending News
    </div>
  );
};

export default logo;
