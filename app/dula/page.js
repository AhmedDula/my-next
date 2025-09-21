import Link from "next/link";

export default async function Home() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const Products = data.map((p) => {
    return (
      <Link href={`/dula/${p.id}`} style={{
          background: "#525252c9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          
          margin: "4px",
          padding: "14px",
          width: "80%",
          height: "auto",
          borderRadius: "17px",
        }}
        key={p.id}>
      <div
        
        >
        <h4>Post: {p.id}</h4>
        <h5>
          {" "}
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              color: "rgba(20, 20, 20, 1)",
            }}
          >
            Title:
          </span>
          {p.title}
        </h5>
        <hr style={{ width: "90%" }} />
        <p>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "rgba(20, 20, 20, 1)",
            }}
          >
            Body:
          </span>{" "}
          {p.body}
        </p>
      </div>
  </Link>
    );
  });
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <h1>Dulllla</h1>

      {Products}
    </div>
  );
}
