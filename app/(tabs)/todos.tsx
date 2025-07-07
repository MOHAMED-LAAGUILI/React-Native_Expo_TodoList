import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const initialTasks: Task[] = [
  { id: '1', title: 'Learn Python', completed: false },
  { id: '2', title: 'Subscribe to Codesistency', completed: true },
  { id: '3', title: 'Learn React Native', completed: false },
];

const TodosScreen = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [input, setInput] = useState('');

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now().toString(), title: input, completed: false }, ...tasks]);
    setInput('');
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks => tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks => tasks.filter(t => t.id !== id));
  };

  // Placeholder for edit logic
  const editTask = (id: string) => {
    // Could open a modal or inline edit
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Today&rsquo;s Tasks <Text style={{fontSize: 20}}>👀</Text></Text>
      <Text style={styles.subheader}>{`${completedCount} of ${tasks.length} completed`}</Text>
      {/* Progress Bar */}
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{progress}%</Text>
      {/* Add Task Input */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder="What needs to be done?"
          placeholderTextColor="#a0aec0"
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addTask}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTask}>
          <Ionicons name="add" size={24} color="#32d48e" />
        </TouchableOpacity>
      </View>
      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 8 }}
        renderItem={({ item }) => (
          <View style={[styles.taskCard, item.completed && { opacity: 0.5 }]}> 
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <TouchableOpacity onPress={() => toggleComplete(item.id)}>
                <Feather
                  name={item.completed ? 'check-circle' : 'circle'}
                  size={24}
                  color={item.completed ? '#32d48e' : '#a0aec0'}
                  style={{ marginRight: 12 }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && { textDecorationLine: 'line-through', color: '#a0aec0' },
                ]}
              >
                {item.title}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity onPress={() => editTask(item.id)}>
                <Feather name="edit-2" size={20} color="#f8d57e" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <MaterialIcons name="delete" size={22} color="#fd5e6b" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181f2a',
    padding: 20,
    paddingTop: 48,
  },
  header: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subheader: {
    color: '#a0aec0',
    marginBottom: 10,
    fontSize: 15,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#232b3b',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressBarFill: {
    backgroundColor: '#32d48e',
    height: '100%',
  },
  progressText: {
    color: '#32d48e',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#232b3b',
    color: '#fff',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: '#232b3b',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCard: {
    backgroundColor: '#232b3b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  taskTitle: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
  },
});

export default TodosScreen;
