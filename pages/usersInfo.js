import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function UsersInfoPage() {
  const { data, error } = useSWR("/api/users-info", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <>
    <h1>最新用户信息</h1>
    <ul>
        {
          data.map(user=>{
             return (
                  <li key={user.id}>
                  <span>用户：{user.name}</span>
                  <span>详情：{user.desc}</span>
              </li>
             )
          })
        }
    </ul>
    </>
  );
}
export default UsersInfoPage
