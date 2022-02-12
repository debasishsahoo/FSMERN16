import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'



function PostEntry() {
    const noimage = 'https://res.cloudinary.com/debasish/image/upload/v1644669246/noimage_en0zhj.jpg'
    const [post, setPost] = useState({
        title: "",
        body: "",
        image: noimage
    });

    const { title, body, image } = post
    const onInputChage = e => {
        setPost({ ...post, authorid: '4512569659', [e.target.name]: e.target.value })
    }
    const handelImage = async e => {
        e.preventDefault()
        const img = e.target.files[0]
        if (!img) return alert("File Dose Not Exist")
        if (img.size > 1024 * 1024 * 5) return alert("File is too Lage!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png' && img.type !== 'image/jpg') return alert("File format is incorrect!")

        const data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "mernimage")
        data.append('cloud_name', "debasish")
        fetch('http://api.cloudinary.com/v1_1/debasish/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                post.image = data.url
                console.log(data)
                console.log(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const submitPostRecord = async e => {
        e.preventDefault();
        await Axios.post('http://localhost:7000/post/', post);
        e.target.reset()
        alert('Post Inserted')

    };








    return (<div className="col-md-4">
        <div className="position-sticky" style={{ top: '2rem' }}>
            <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">Submit your Post</h4>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='title' placeholder="Demo Tilte" value={title} onChange={e => onInputChage(e)} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='body' value={body} onChange={e => onInputChage(e)} ></textarea>
            </div>

            <div className="form-group">
                <label>Image</label>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" name='image' id="customFile" onChange={handelImage} />
                </div>
            </div>
            <hr />
            <div className="grid-container">
                <div>
                    <img className='grid-item grid-item-1' src={image} alt='' />
                </div>
            </div>
            <div className="form-group">
                <br />
                <button className="btn btn-primary" onClick={submitPostRecord} >Submit</button>
            </div>

        </div>
    </div>)

}

export default PostEntry
