function PostEntry() {
    return (<div className="col-md-4">
        <div className="position-sticky" style={{ top: '2rem' }}>
            <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">Submit your Post</h4>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='title' placeholder="Demo Tilte" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='description' ></textarea>
            </div>
            <div className="form-group">
                <label>Tags</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="tag1,tag2,.." name='tags' />
            </div>
            <div className="form-group">
                <label>Image</label>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" />
                </div>
            </div>
            <hr />
            <div className="grid-container">
                <div>
                    <img className='grid-item grid-item-1' src='' alt='' />
                </div>
            </div>
            <div className="form-group">
                <br />
                <button className="btn btn-primary" >Submit</button>
            </div>

        </div>
    </div>)

}

export default PostEntry
