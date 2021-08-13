import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [skills, setSkills] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function newSkills() {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My skills</Text>
      <TextInput
        style={styles.input}
        placeholder="My skills"
        placeholderTextColor="#999"
        onChangeText={setSkills}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={setSkills}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <Text style={styles.skillsText}>My skillsText</Text>

      <TouchableOpacity style={styles.buttonSkill}>
        <Text style={styles.textSkill}>Teste</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  skillsText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonSkill: {
    color: '#fff',
    backgroundColor: '#1f1E25',
    padding: 20,
  },
  textSkill: {},
});
