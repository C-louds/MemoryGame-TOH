
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
})

export default function Header() {
    return (
        <div className={pressStart2P.className} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}>
        <h1 style={{
            alignSelf: 'center',
            fontSize: '2.5rem',
            color: 'white',
            padding: '0.5rem',
            
        }}> Memory Game</h1>
        <p>Only click a card once!</p>
        </div>
    )
}