import React from 'react';

interface VideoProps {
  title: string;
  youtubeId: string;
}

const Video = ({ title, youtubeId }: VideoProps) => (
  <div className="aspect-video w-full overflow-hidden rounded-lg">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="h-full w-full"
    />
  </div>
);

const Videos = () => {
  const videos = [
    {
      title: "Warleyson",
      youtubeId: "bDv0xDaUBPk"
    },
    {
      title: "Leo P",
      youtubeId: "Gw931_Fsr5k"
    },
    {
      title: "TJ Review",
      youtubeId: "CdR2il3Ueec"
    },
    {
      title: "TTB Review",
      youtubeId: "n926I4uSxpQ"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Videos</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <Video key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos; 