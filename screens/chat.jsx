import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

const chatData = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey there! How are you?',
    time: '10:30 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Are we still on for lunch?',
    time: '10:32 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '5',
    name: 'Mike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '6',
    name: 'fike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '7',
    name: 'gike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '8',
    name: 'kike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  // Add more chat data as needed
];

const Chat = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(chatData);

  const handleSearch = text => {
    setSearch(text);
    const filtered = chatData.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.message.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('message', {name: item.name})}>
      <Image
        source={require('../public/assets/profile.png')}
        style={styles.avatar}
      />
      <View style={styles.chatContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop:25
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
    // backgroundColor: '#25D366',

    textAlign: 'center',
  },
  searchInput: {
    padding: 14,
    backgroundColor: '#f1f1f1',
    borderRadius: 19,
    margin: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});

export default Chat;
