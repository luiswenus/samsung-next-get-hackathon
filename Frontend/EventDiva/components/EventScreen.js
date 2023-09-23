import { useState } from 'react';
import { useRouter } from 'expo-router'
import {StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import EventItem from './EventItem'
import useFetch from '../hooks/useFetch';



export default function EventScreen() {
    const router = useRouter();
    const { data, isLoading, error } = useFetch();

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
                    handleNavigate={() => router.push(`/event-details/${job.job_id}`)}
                />
                )
            )}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    
  });
  