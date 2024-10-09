import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { useColorScheme } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Zoe Mart Derick R. Pabillaran');
  const [email, setEmail] = useState('pabillaran,zoe24@gmail.com');
  const [bio, setBio] = useState('This is my profile!');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsDarkMode(colorScheme === 'dark');
  }, [colorScheme]);

  const handleEditProfile = () => {
    navigation.navigate('ManageUser', {
      name,
      email,
      bio,
      onSave: (newName, newEmail, newBio) => {
        setName(newName);
        setEmail(newEmail);
        setBio(newBio);
      },
    });
  };

  const handleNotification = () => {
    alert('Notifications settings coming soon!');
  };

  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <View style={styles.profileRow}>
          <Image
            source={require('./assets/zoe.jpg')}  // Ensure image path is correct
            style={styles.profilePhoto}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.text}>{name}</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{email}</Text>

            <Text style={styles.label}>Bio:</Text>
            <Text style={styles.text}>{bio}</Text>
          </View>
        </View>

        {/* Profile Title */}
        <Text style={styles.sectionTitle}>Profile</Text> {/* Add Profile Title */}

        {/* Manage User Section with Text and Button */}
        <View style={styles.manageUserRow}>
          <Text style={styles.manageUserText}>Manage User</Text>
          <TouchableOpacity onPress={handleEditProfile} style={styles.manageUserButton}>
            <Text style={styles.buttonText}>{'>'}</Text> {/* Change to ">" */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>

        {/* Notification Section with Text and Button */}
        <View style={styles.manageUserRow}>
          <Text style={styles.manageUserText}>Notifications</Text>
          <TouchableOpacity onPress={handleNotification} style={styles.manageUserButton}>
            <Text style={styles.buttonText}>{'>'}</Text> {/* Add ">" for notifications */}
          </TouchableOpacity>
        </View>

        {/* Dark Mode Toggle */}
        <View style={styles.toggleRow}>
          <Text style={styles.label}>Dark Mode:</Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(prev => !prev)}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </View>
    </View>
  );
};

// Styles for light and dark modes
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  section: {
    padding: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#CCC',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#C0C0C0',
    marginRight: 20,
  },
  textWrapper: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  manageUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  manageUserText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#000',
  },
  manageUserButton: {
    backgroundColor: '#00aaff',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  section: {
    padding: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#444',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFF',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#888888',
    marginRight: 20,
  },
  textWrapper: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFF',
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
  },
  manageUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  manageUserText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#FFF',
  },
  manageUserButton: {
    backgroundColor: '#00aaff',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ProfileScreen;
