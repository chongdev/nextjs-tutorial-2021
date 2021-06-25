import React from "react";
const BASEIMG = "https://image.tmdb.org/t/p/w1280";
export default function Post({ posts, randomData }) {
  return (
    <div>
      <h1>This Post</h1>

      <span>randomData: {randomData}</span>
      <ul>
        {posts.map((post, index) => {
          return <li key={index}>{`${index + 1}. ${post}`}</li>;
        })}
      </ul>

      {/* {<span>{JSON.stringify(movies)}</span>} */}
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      posts: [
        "เทคโนโลยีของ Apple ช่วยให้นักการศึกษาและผู้เรียนเชื่อมต่อถึงกันได้ในปีที่ทุกคนต้องอยู่ห่างกัน",
        "Apple Tower Theatre จะเปิดให้บริการในย่านดาวน์ทาวน์ลอสแองเจลิสในวันพฤหัสบดีนี้",
        "Apple เปิดตัว Today at Apple Creative Studios เพื่อมอบโอกาสแก่ครีเอทีฟรุ่นใหม่จากกลุ่มคนที่มีอยู่เป็นสัดส่วนน้อย",
      ],
      randomData: Math.random().toString(),
    }, // will be passed to the page component as props
  };
}
