import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/user">
            <a>User</a>
          </Link>
          <Link href="/post">
            <a>Post</a>
          </Link>
        </nav>
    )
}
