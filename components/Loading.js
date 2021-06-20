/* eslint-disable @next/next/no-img-element */
import { Circle } from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: '100vh' }}>
            <div>
                <img 
                    src="https://img.icons8.com/color/96/000000/chat--v1.png" 
                    alt="" 
                    style={{ marginBottom: 10 }}
                    height={200}
                />

                <Circle color="#0A1172" size={60}></Circle>
            </div>
        </center>
    )
}

export default Loading
