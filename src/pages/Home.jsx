// import React, { useEffect } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { getList } from "../redux/action/user";
// const Home = () => {
//   useEffect(() => {
//     document.title = "Mama Recipe";
//   }, []);

//   const user = useSelector((state) => {
//     return state.user;
//   });

//   console.log(user);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getList());
//   }, []);

//   return (
//     <>
//       <h1>Nilai</h1>
//       {user.Loading ? (
//         <h1>Loading...</h1>
//       ) : user.isError ? (
//         <h1>Eroor...</h1>
//       ) : (
//         user.data.map((item, index) => <div key={index}>{item.name}</div>)
//       )}
//     </>
//   );

//   // const onTambah = () => {
//   //   dispatch({
//   //     type: "TAMBAH",
//   //   });
//   // };

//   // const onKurang = () => {
//   //   dispatch({
//   //     type: "KURANG",
//   //   });
//   // };
//   // return (
//   //   <>
//   //     <h1>Nilai: {state.nilai}</h1>
//   //     {JSON.stringify(state)}

//   //     <button onClick={() => onTambah()}>TAMBAH</button>
//   //     <button onClick={() => onKurang()}>KURANG</button>
//   //   </>
//   // );
// };

// export default Home;
