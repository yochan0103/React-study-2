import { useParams, useLocation } from "react-router-dom";

export const UrlParams = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <div>パラメーターは {id} です。</div>
      <p>クエリパラメーターは {query.get("name")}です。</p>
    </div>
  );
};
