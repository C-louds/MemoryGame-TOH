export default function Card({id, name, src, onClick}) {
    return (
        <div style={{
            backgroundColor: '#685752',
            borderRadius: '2rem',
            cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
            width: '200px',
            height: '200px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            }} onClick={() => onClick(id)}>
          <h3> {name} </h3>
          <img src={src} style={{
            width: '100px',
            height: '100px',
          }}/>
        </div>
    )
}