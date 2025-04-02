import { Workbench } from 'next/font/google'

const workbench = Workbench({
    weight: '400', 
    subsets: ['latin'],
})

export default function Score({score, highScore}) { 
    return ( 
        <div className={workbench.className} style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '40px',
            justifyContent: 'space-between',
            color: 'white',
        }}>
            <p>Score: {score} </p>
            <p> High Score: {highScore} </p>
        </div>
    )
}