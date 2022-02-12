function Header() {
    return (<header className="p-3 bg-dark text-white">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"></form>
                <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Logout</button>
                </div>
            </div>
        </div>
    </header>)

}

export default Header
