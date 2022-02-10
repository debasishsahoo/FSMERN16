import Header from './headers/header'
import Footer from './footers/footer'
import SubHeader from './subheaders/subheader'
import PostEntry from './postentry/postentry'
import Postwall from './postwall/postwall'
import '../../static/post.css'
function PostPage() {
    return (
        <div>
            <Header />
            <div className="container">
                <main>
                    <SubHeader />
                    <div className="row g-5">
                        <Postwall />
                        <PostEntry />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
export default PostPage


