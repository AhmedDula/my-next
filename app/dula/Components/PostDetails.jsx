export default async function Post({ postId }) {
  
    await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },2000)
    })

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:'20px'
      }}
    > 
      <h1>{data.id}</h1>
      <h1>{data.title}</h1>

    </div>
  );
}