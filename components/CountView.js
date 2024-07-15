import React from 'react'

function CountView() {
  const videos = [
    "https://www.youtube.com/embed/D5Bl4KhKU7A",
    "https://www.youtube.com/embed/v9bWsMQhKG0",
    "https://www.youtube.com/embed/v61LpHBpBY4",
    "https://www.youtube.com/embed/yeuxe6D8CeY",
    "https://www.youtube.com/embed/jCGR6cfLfSA",
    "https://www.youtube.com/embed/EDrcN8xexAg",
    "https://www.youtube.com/embed/3co4cm41iL4"
  ];

  return (
    <div className=" mb-[8rem] mt-[8rem] flex   md:flex-row flex-col  gap-11">


      <div className="flex md:items-end items-center justify-center">
        <p className="text-white text-[3rem] w-[24rem] ">Take a look at the cool projects we've worked on!</p>
      </div>

      <div className="flex flex-col items-center">
        
        <div className="relative overflow-hidden md:w-[860px] w-[20rem] h-[600px] ">
          <div className="flex absolute left-0 top-0">
            <div className="flex flex-col animate-scroll-vertical ">
              {videos.map((video, index) => (
                <iframe
                  key={index}
                  width="330"
                  height="365"
                  src={video}
                  className="mb-4 "
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ))}
            </div>
            <div className=" flex-col ml-4 animate-scroll-reverse hidden md:flex ">
              {videos.map((video, index) => (
                <iframe
                  key={`second-column-${index}`}
                  width="330"
                  height="365"
                  src={video}
                  className="mb-4 "
                  title={`YouTube video player ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ))}
            </div>
          </div>
        </div>
      <style jsx>{`
        @keyframes scrollVertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollVerticalReverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-scroll-vertical {
          animation: scrollVertical 60s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scrollVerticalReverse 60s linear infinite;
        }
      `}</style>
    </div>

    </div>
  )
}

export default CountView


// <div className="flex justify-start items-center">
//         <h1 className="text-[3rem] font-semibold text-yellow-200">
//           Projects
//         </h1>
//       </div>
//       <div className="relative overflow-hidden lg:w-[70rem] w-full"  style={{ height: '315px' }}>
//         <div className="flex animate-scroll absolute left-0 top-0">
//           {videos.concat(videos).map((video, index) => (
//             <iframe
//               key={index}
//               width="420"
//               height="275"
//               src={video}
//               className="mr-4  rounded-3xl"
//               title={`YouTube video player ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           ))}
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>