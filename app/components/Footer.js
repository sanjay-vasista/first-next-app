export default function Footer(){
    return (
        <footer className="fixed bottom-0 p-3 w-screen bg-black text-white text-center">
            <p>&copy; {new Date().getFullYear()} Vasista All rights reserved</p>
        </footer>
    )
}