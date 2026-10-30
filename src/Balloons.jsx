import "./Balloons.css";

const COLORS = ['#f4a7b5', '#f7d08a', '#a9d8e0', '#c8b6e8',  '#f5b98a', '#e8798a']

const BALLOONS = Array.from({length:14}, (_, i) => ({
    id:i,
    left: 4+ Math.random()*92,
    color: COLORS[i%COLORS.length],
    size:0.75 + Math.random()*0.5,
}))

function Balloons() {
    return (
        <div className="balloons" aria-hidden="true">
            {BALLOONS.map((b) => (
                <div
                key={b.id}
                className="balloon"
                style={{
                    left:`${b.left}%`,
                    scale: b.size,
                    '--balloon': b.color,
                }}></div>
            ))}
        </div>
    )
}

export default Balloons