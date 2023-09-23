import { useState } from 'react';
import { useRouter } from 'expo-router'
import {StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import EventItem from './EventItem'
import useFetch from '../hooks/useFetch';



export default function EventScreen() {
    const { data, isLoading, error } = useFetch();
    const [expandedEventId, setExpandedEventId] = useState(null);

    const handleCardPress = (eventId) => {
        if (eventId === expandedEventId) {
            setExpandedEventId(null);  // Collapse if the same item is clicked again
        } else {
            setExpandedEventId(eventId);  // Expand the clicked item
        }
    };

    console.log(data);

    return (
      <View>
        <View style={{marginTop: 10}}>
            {isLoading ? (
                <ActivityIndicator color='#ffffff'/>
            ): error ? (
                <Text>Something wernt Wrong</Text>
            ) : (
                data?.map((event) =>
                <EventItem
                    event={event}
                    key={event.id}
                    isExpanded={event.id === expandedEventId}
                    handleCardPress={() => handleCardPress(event.id)}
                    />
                )
            )}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    
  });
  