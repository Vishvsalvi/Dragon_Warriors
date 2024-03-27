import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-36 text-center h-screen"  >
    <h2 className="text-3xl">
        There was a problem with your request
    </h2>
    <p>We couldn't find the page you were looking for. </p>
    Return to <Link href='/' className='text-blue-600'>Home page</Link>
</div>
  )
}