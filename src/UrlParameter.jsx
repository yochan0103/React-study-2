import { useParams } from "react-router-dom";

export const UrlParams = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <div>パラメーターは {id} です。</div>
    </div>
  );
};
