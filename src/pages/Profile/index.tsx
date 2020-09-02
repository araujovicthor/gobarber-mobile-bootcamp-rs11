import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  const { signOut } = useAuth();

  const navigateToProfile = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <>
      <TouchableOpacity onPress={navigateToProfile}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </>
  );
};

export default Profile;
