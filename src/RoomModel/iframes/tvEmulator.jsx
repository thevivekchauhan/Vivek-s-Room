// /* eslint-disable react/display-name */
// import { Html } from '@react-three/drei';
// import React, { useMemo } from 'react';
// import { EmulatorJS } from 'react-emulatorjs';

// import { useCameraStore } from '../../helper/CameraStore';

// const TvEmulator = React.memo(() => {
//     const rom = './assets/SuperMarioAdvance4.gba';

//     const cameraState = useCameraStore((state) => state.cameraState);
//     const isTv = useMemo(() => cameraState === 'tv', [cameraState]);

//     return (
//         <group>
//             {isTv && (
//                 <Html
//                     transform
//                     wrapperClass="htmlScreen"
//                     distanceFactor={0.925}
//                     occlude="blending"
//                     position={[2.28, 2.72, -3.6]}
//                     zIndexRange={[2, 1]}
//                 >
//                     <EmulatorJS
//                         width={1610}
//                         height={852}
//                         EJS_core="gba"
//                         EJS_gameUrl={rom}
//                         EJS_startOnLoaded={true}
//                         EJS_Buttons={{ fullscreen: false }}
//                     />
//                 </Html>
//             )}
//         </group>
//     );
// });

// export default TvEmulator;


// /* eslint-disable react/display-name */
// import { Html } from '@react-three/drei';
// import React, { useState, useMemo } from 'react';
// import { useCameraStore } from '../../helper/CameraStore';

// const TvVideoPlayer = React.memo(() => {
//     const cameraState = useCameraStore((state) => state.cameraState);
//     const isTv = useMemo(() => cameraState === 'tv', [cameraState]);
//     const [selectedVideo, setSelectedVideo] = useState(null);

//     const videos = [
//         { 
//             id: 1, 
//             url: 'https://youtu.be/9lMHxnQYlAE?si=CSV37OQX7Yaq-DV5', 
//             title: 'The Spectacular Ahmedabad Kite Festival 2025: A Sky Full of Wonders', 
//             thumbnail: 'https://img.youtube.com/vi/9lMHxnQYlAE/maxresdefault.jpg'
//         },
//         { 
//             id: 2, 
//             url: 'https://youtu.be/iIUV7MiJG8Q?si=mw_fNPOQfe1oRIE2', 
//             title: 'Century of Experience: Life Advice from 103-Year Grandma | Podcast Episode', 
//             thumbnail: 'https://img.youtube.com/vi/iIUV7MiJG8Q/maxresdefault.jpg'
//         },
//         { 
//             id: 3, 
//             url: 'https://youtu.be/5XcrtlbZzoA?si=IVx9hlZYKw8Gm7a5', 
//             title: 'Science City Ahmedabad: A Fascinating Journey into Science & Technology | Exhibits, Fun & Education', 
//             thumbnail: 'https://img.youtube.com/vi/5XcrtlbZzoA/maxresdefault.jpg'
//         },
//     ];

//     const getEmbedUrl = (url) => {
//         const videoId = url.split('?')[0].split('/').pop();
//         return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&volume=1&controls=1`;
//     };

//     return (
//         <group>
//             {isTv && (
//                 <Html
//                     transform
//                     wrapperClass="htmlScreen"
//                     distanceFactor={0.925}
//                     occlude="blending"
//                     position={[2.28, 2.72, -3.6]}
//                     zIndexRange={[2, 1]}
//                 >
//                     <div style={{ 
//                         width: '1610px', 
//                         height: '852px', 
//                         backgroundColor: '#111',
//                         borderRadius: '10px',
//                         overflow: 'hidden'
//                     }}>
//                         {!selectedVideo ? (
//                             <div style={{ 
//                                 padding: '40px',
//                                 height: '100%',
//                                 display: 'flex',
//                                 flexDirection: 'column'
//                             }}>
//                                 <h2 style={{
//                                     color: 'white',
//                                     fontSize: '32px',
//                                     marginBottom: '30px',
//                                     textAlign: 'center'
//                                 }}>Select a Video</h2>
                                
//                                 <div style={{
//                                     display: 'grid',
//                                     gridTemplateColumns: 'repeat(3, 1fr)',
//                                     gap: '20px',
//                                     flex: 1,
//                                     overflowY: 'auto'
//                                 }}>
//                                     {videos.map(video => (
//                                         <div 
//                                             key={video.id}
//                                             onClick={() => setSelectedVideo(video)}
//                                             style={{
//                                                 cursor: 'pointer',
//                                                 borderRadius: '8px',
//                                                 overflow: 'hidden',
//                                                 transition: 'transform 0.2s',
//                                                 ':hover': {
//                                                     transform: 'scale(1.03)'
//                                                 }
//                                             }}
//                                         >
//                                             <div style={{
//                                                 position: 'relative',
//                                                 paddingBottom: '56.25%',
//                                                 backgroundImage: `url(${video.thumbnail})`,
//                                                 backgroundSize: 'cover',
//                                                 backgroundPosition: 'center'
//                                             }}>
//                                                 <div style={{
//                                                     position: 'absolute',
//                                                     top: 0,
//                                                     left: 0,
//                                                     right: 0,
//                                                     bottom: 0,
//                                                     backgroundColor: 'rgba(0,0,0,0.3)',
//                                                     display: 'flex',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'center'
//                                                 }}>
//                                                     <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                                         <path d="M8 5V19L19 12L8 5Z" fill="white"/>
//                                                     </svg>
//                                                 </div>
//                                             </div>
//                                             <h3 style={{
//                                                 color: 'white',
//                                                 padding: '15px',
//                                                 margin: 0,
//                                                 fontSize: '18px',
//                                                 textAlign: 'center'
//                                             }}>{video.title}</h3>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ) : (
//                             <div style={{ 
//                                 width: '100%', 
//                                 height: '100%', 
//                                 position: 'relative',
//                                 backgroundColor: 'black'
//                             }}>
//                                 <iframe
//                                     width="100%"
//                                     height="100%"
//                                     src={getEmbedUrl(selectedVideo.url)}
//                                     title={selectedVideo.title}
//                                     frameBorder="0"
//                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                     allowFullScreen
//                                 ></iframe>
                                
//                                 <button
//                                     onClick={() => setSelectedVideo(null)}
//                                     style={{
//                                         position: 'absolute',
//                                         top: '20px',
//                                         left: '20px',
//                                         padding: '10px 20px',
//                                         backgroundColor: 'rgba(0,0,0,0.7)',
//                                         color: 'white',
//                                         border: 'none',
//                                         borderRadius: '5px',
//                                         cursor: 'pointer',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         gap: '8px',
//                                         fontSize: '16px',
//                                         transition: 'background-color 0.2s',
//                                         ':hover': {
//                                             backgroundColor: 'rgba(0,0,0,0.9)'
//                                         }
//                                     }}
//                                 >
//                                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M15 18L9 12L15 6" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                     </svg>
//                                     Back to Videos
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </Html>
//             )}
//         </group>
//     );
// });

// export default TvVideoPlayer;



/* eslint-disable react/display-name */
import { Html } from '@react-three/drei';
import React, { useState, useMemo } from 'react';
import { useCameraStore } from '../../helper/CameraStore';

const TvVideoPlayer = React.memo(() => {
    const cameraState = useCameraStore((state) => state.cameraState);
    const isTv = useMemo(() => cameraState === 'tv', [cameraState]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = [
        { 
            id: 1, 
            url: 'https://youtu.be/9lMHxnQYlAE?si=CSV37OQX7Yaq-DV5', 
            title: 'The Spectacular Ahmedabad Kite Festival 2025: A Sky Full of Wonders', 
            thumbnail: 'https://img.youtube.com/vi/9lMHxnQYlAE/maxresdefault.jpg'
        },
        { 
            id: 2, 
            url: 'https://youtu.be/iIUV7MiJG8Q?si=mw_fNPOQfe1oRIE2', 
            title: 'Century of Experience: Life Advice from 103-Year Grandma | Podcast Episode', 
            thumbnail: 'https://img.youtube.com/vi/iIUV7MiJG8Q/maxresdefault.jpg'
        },
        { 
            id: 3, 
            url: 'https://youtu.be/5XcrtlbZzoA?si=IVx9hlZYKw8Gm7a5', 
            title: 'Science City Ahmedabad: A Fascinating Journey into Science & Technology | Exhibits, Fun & Education', 
            thumbnail: 'https://img.youtube.com/vi/5XcrtlbZzoA/maxresdefault.jpg'
        },
        { 
            id: 4, 
            url: 'https://www.youtube.com/watch?v=din4GA6YuVs', 
            title: 'Ahmedabad Heritage Walk: Exploring the Old City', 
            thumbnail: 'https://img.youtube.com/vi/din4GA6YuVs/maxresdefault.jpg'
        },
        { 
            id: 5, 
            url: 'https://www.youtube.com/watch?v=8rA-91zvltY', 
            title: 'Sabarmati Riverfront: Ahmedabad\'s Beautiful Waterfront Development', 
            thumbnail: 'https://img.youtube.com/vi/8rA-91zvltY/maxresdefault.jpg'
        },
    ];

    const getEmbedUrl = (url) => {
        // Handle both URL formats:
        // 1. https://www.youtube.com/watch?v=VIDEO_ID
        // 2. https://youtu.be/VIDEO_ID
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&volume=1&controls=1`;
    };

    return (
        <group>
            {isTv && (
                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={0.925}
                    occlude="blending"
                    position={[2.28, 2.72, -3.6]}
                    zIndexRange={[2, 1]}
                >
                    <div style={{ 
                        width: '1610px', 
                        height: '852px', 
                        backgroundColor: '#111',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }}>
                        {!selectedVideo ? (
                            <div style={{ 
                                padding: '40px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h2 style={{
                                    color: 'white',
                                    fontSize: '32px',
                                    marginBottom: '30px',
                                    textAlign: 'center'
                                }}>Select a Video</h2>
                                
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '20px',
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '10px'
                                }}>
                                    {videos.map(video => (
                                        <div 
                                            key={video.id}
                                            onClick={() => setSelectedVideo(video)}
                                            style={{
                                                cursor: 'pointer',
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                transition: 'transform 0.2s',
                                                backgroundColor: '#222',
                                                ':hover': {
                                                    transform: 'scale(1.03)'
                                                }
                                            }}
                                        >
                                            <div style={{
                                                position: 'relative',
                                                paddingBottom: '56.25%',
                                                backgroundImage: `url(${video.thumbnail.replace('https://', 'https://')})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'
                                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 style={{
                                                color: 'white',
                                                padding: '15px',
                                                margin: 0,
                                                fontSize: '18px',
                                                textAlign: 'center',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>{video.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div style={{ 
                                width: '100%', 
                                height: '100%', 
                                position: 'relative',
                                backgroundColor: 'black'
                            }}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={getEmbedUrl(selectedVideo.url)}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        padding: '10px 20px',
                                        backgroundColor: 'rgba(0,0,0,0.7)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '16px',
                                        transition: 'background-color 0.2s',
                                        ':hover': {
                                            backgroundColor: 'rgba(0,0,0,0.9)'
                                        }
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Back to Videos
                                </button>
                            </div>
                        )}
                    </div>
                </Html>
            )}
        </group>
    );
});

export default TvVideoPlayer;