import { React } from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PostData from "../../components/PostData/PostData";
import { useParams } from "react-router-dom";

import "./PostDetail.css";

const PostDetail = () => {
    const { objId } = useParams();


    return (
        <div className="postdetail-wrapper">
            <Navbar />
            <PostData objId={objId} />
            <Footer />
        </div>
    )
}

export default PostDetail;