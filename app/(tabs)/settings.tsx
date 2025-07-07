import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoSync, setAutoSync] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="settings" size={28} color="#4f8cff" />
        <Text style={styles.header}>Settings</Text>
      </View>
      <Text style={styles.section}>Preferences</Text>
      <View style={styles.row}>
        <Feather name="moon" size={22} color="#4f8cff" style={styles.icon} />
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#232b3b', true: '#4f8cff' }} />
      </View>
      <View style={styles.row}>
        <Feather name="bell" size={22} color="#f8d57e" style={styles.icon} />
        <Text style={styles.label}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} trackColor={{ false: '#232b3b', true: '#f8d57e' }} />
      </View>
      <View style={styles.row}>
        <Feather name="refresh-cw" size={22} color="#32d48e" style={styles.icon} />
        <Text style={styles.label}>Auto Sync</Text>
        <Switch value={autoSync} onValueChange={setAutoSync} trackColor={{ false: '#232b3b', true: '#32d48e' }} />
      </View>
      <Text style={styles.section}>Actions</Text>
      <TouchableOpacity style={styles.actionRow}>
        <Ionicons name="share-outline" size={22} color="#4f8cff" style={styles.icon} />
        <Text style={styles.label}>Share App</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionRow}>
        <Feather name="check-square" size={22} color="#32d48e" style={styles.icon} />
        <Text style={styles.label}>Clear Completed (2)</Text>
      </TouchableOpacity>
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 18,
  },
  header: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  section: {
    color: '#a0aec0',
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 6,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232b3b',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#232b3b',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
  },
  icon: {
    marginRight: 4,
  },
});

export default SettingsScreen;
