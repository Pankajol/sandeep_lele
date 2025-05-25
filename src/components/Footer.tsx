export default function Footer() {
  return (
    <footer className="bg-orange-700 text-white py-8 px-4 pt-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} BJP District Office | All Rights Reserved.
        </p>

        <div className="flex space-x-6">
          {/* Social Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-300 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.62 9.8v-6.94H8.54v-2.86h1.84V9.88c0-1.82 1.08-2.83 2.74-2.83.79 0 1.61.14 1.61.14v1.77h-.91c-.9 0-1.18.56-1.18 1.13v1.36h2.01l-.32 2.86h-1.69v6.94A10 10 0 0022 12z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-gray-300 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.07 9.07 0 01-2.89 1.1A4.52 4.52 0 0016.67 0c-2.51 0-4.54 2.26-3.96 4.69a12.87 12.87 0 01-9.35-4.75 4.59 4.59 0 00-1.19 2.91c0 1.99 1 3.75 2.51 4.77a4.54 4.54 0 01-2.06-.56v.06c0 2.8 2.07 5.13 4.81 5.66a4.57 4.57 0 01-2.04.07c.58 1.88 2.26 3.25 4.24 3.28A9.07 9.07 0 010 19.54 12.8 12.8 0 006.92 22c8.31 0 12.85-7.18 12.85-13.41 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-300 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.5 2.25a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
