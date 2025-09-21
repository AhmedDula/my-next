import { Suspense } from "react";
import Post from "../Components/PostDetails";

export default async function postDetails({ params }) {
  const {id} = await params ;

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Dullla Details</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Post postId={id} />
      </Suspense>
    </div>
  );
}
