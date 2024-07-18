import Video from 'react-native-video';
import { useRef } from 'react';
import { Text, View, Button} from 'react-native';
import { styles } from '../../App';
import { useState } from 'react';


const VideoPlayer = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    
    const ref = useRef<Video | null>(null);
  
    // Function to control the video
    const togglePlayback = () => {
        setIsPlaying(isPlaying => !isPlaying)
    }

    

    return (
        <View style={styles.button}>
            <Text>{}</Text>
            <Button  title={isPlaying ? 'pause' : 'play'} onPress={togglePlayback} ></Button>
            <Video  ref={ref} style={styles.video} source={{uri: 'https://i.imgur.com/WQ5W7f9.mp4'}} paused={!isPlaying} ></Video>
        </View>
    )
}


export default VideoPlayer