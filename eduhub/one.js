import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DayOneScreen = () => {
  const [timer, setTimer] = useState(3600); // 1 hour in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(3600);
  };

  const formatTime = (seconds) => {
    const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    return `${getMinutes}:${getSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day 1: Study Plan</Text>
      <View style={styles.topicContainer}>
        <Text style={styles.topic}>- Mathematics: Algebra</Text>
        <Text style={styles.topic}>- Science: Photosynthesis</Text>
        <Text style={styles.topic}>- English: Essay Writing</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(timer)}</Text>
        <Button onPress={toggleTimer} title={isActive ? "Pause" : "Start"} />
        <Button onPress={resetTimer} title="Reset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  topicContainer: {
    marginBottom: 30,
  },
  topic: {
    fontSize: 18,
    marginBottom: 10,
  },
  timerContainer: {
    alignItems: 'center',
  },
  timer: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default DayOneScreen;
