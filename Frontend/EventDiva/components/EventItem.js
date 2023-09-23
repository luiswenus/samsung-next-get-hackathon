import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EventItem({ event, isExpanded, handleCardPress }) {
    const boxStyle = isExpanded ? [styles.box, styles.expandedBox] : styles.box;

    console.log(event)
    return (
        <TouchableOpacity
            onPress={handleCardPress}
        >

            <View style={boxStyle}>
               
                <Text style={styles.titleText}>
                    {event?.title}
                </Text>
                <Text style={styles.timeText}>
                    🕑 {event?.time}
                </Text>
                <Text style={styles.placeText}>
                    📍 {event?.place}
                </Text>
            </View>
 
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    box: {
        alignItems: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 15,
        paddingLeft: 25,
        paddingTop: 15, 
        paddingBottom: 15,
        marginTop: 12,
    },
    expandedBox: {
        height: 810,  // Example value, adjust accordingly
        // Add more styles to differentiate from the regular box
    },
    titleText: {
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 16,
    },
    timeText: {
        color: 'white',
        marginTop: 5
    },
    placeText: {
        color: '#D0D0D0',
        marginTop: 5

    },

})