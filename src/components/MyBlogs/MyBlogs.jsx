import React, { useState, useEffect } from "react";
import styles from "./MyBlogs.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";

const MyBlogs = () => {
  const apiUrl = process.env.NEXT_PUBLIC_APIURL;

  const session = useSession();
  const router = useRouter();
  const dialog = document?.getElementById("dialog");
  const [toDeleteItem, setToDeleteItem] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate } = useSWR(
    `/api/posts?author=${session?.data?.user.name}`,
    fetcher
  );

  const handleDelete = async (id) => {
    try {
      await fetch(`${apiUrl}/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {}
  };

  const handleDialog = () => {
    dialog.close();
    handleDelete(toDeleteItem);
  };

  const viewBlog = (id) => {
    router.push(`${apiUrl}/blogs/${id}`);
  };

  return (
    <div className={styles.myBlogs}>
      <dialog id="dialog" className={styles.dialog}>
        <p>Are you sure, you want to delete this blog?</p>
        <span>
          <button className="btn1" onClick={() => handleDialog()}>
            Yes
          </button>
          <button className="btn1" onClick={() => dialog.close()}>
            Cancel
          </button>
        </span>
      </dialog>
      <h2>My Blogs</h2>
      {data === undefined || data.length === 0 ? (
        <h2 style={{ color: "#666", marginTop: "4rem" }}>
          You haven't created any blog
        </h2>
      ) : (
        data?.map((myBlog) => (
          <div className={styles.myBlog} key={myBlog?._id}>
            <span
              onClick={() => {
                dialog.show();
                setToDeleteItem(myBlog._id);
              }}
            >
              X
            </span>

            <Image
              src={myBlog?.img}
              height={150}
              width={180}
              alt="My Blog image"
              placeholder="blur"
              blurDataURL={myBlog?.img}
              onClick={() => viewBlog(myBlog?._id)}
            />
            <div className={styles.myDesc}>
              <h3>{myBlog?.pTitle}</h3>
              <p>{myBlog?.pDescs}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBlogs;
