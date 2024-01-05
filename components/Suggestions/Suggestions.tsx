import style from "./Suggestions.module.scss";
import SuggestionFolder from "../SuggestionFolder/SuggestionFolder";

interface Playlist {
  title: string;
  thumbnail: string;
  color: string;
  description: string;
};

export default function Suggestions() {
  
  const folders: Playlist[] = [
    {
      "title": "Liked Songs",
      "thumbnail": "/images/placeholder.png",
      "color": "purple",
      "description": "A collection of your favorite tracks that you can't get enough of."
    },
    {
      "title": "Energetic Mix",
      "thumbnail": "/images/placeholder.png",
      "color": "red",
      "description": "Get ready to boost your energy with this high-tempo mix of electrifying tunes."
    },
    {
      "title": "Sunset Serenade",
      "thumbnail": "/images/placeholder.png",
      "color": "pink",
      "description": "Unwind and enjoy the beauty of the sunset with this soothing serenade."
    },
    {
      "title": "Funky Grooves",
      "thumbnail": "/images/placeholder.png",
      "color": "red",
      "description": "Groove to the funky beats and let the rhythm take control."
    },
    {
      "title": "Summer Chillout",
      "thumbnail": "/images/placeholder.png",
      "color": "yellow",
      "description": "Chill and relax with the perfect summer vibes to accompany your day."
    },
    {
      "title": "Retro Vibes",
      "thumbnail": "/images/placeholder.png",
      "color": "purple",
      "description": "Take a trip down memory lane with this playlist filled with nostalgic retro vibes."
    }
  ];  
  
  return (
    <div className={style.main}>
      <h1>Jump back in</h1>
      <div className={style.folders}>
        {folders.map(folder => <SuggestionFolder key={folder.title} playlist={folder} />)}
      </div>
    </div>
  );
};