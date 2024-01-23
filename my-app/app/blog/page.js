const { default: Link } = require("next/link");

function BlogPost() {
    return <div>
        BlogPost List Here
        <ul>
            <li>
                <Link href={'blog/1'}>Post 1</Link>
            </li>
            <li>
                <Link href={'blog/2'}>Post 2</Link>
            </li>
        </ul>
    </div>
}

export default BlogPost;