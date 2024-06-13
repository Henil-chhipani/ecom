// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getUserByEmailPassword } from '../database/database'; // Adjust the import path according to your project structure
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // You can add logic to fetch the currently logged-in user if necessary
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email:string, password:string) => {
    try {
      const user = await getUserByEmailPassword(email, password);
      if (user) {
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



// AuthContext.js

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getUserByEmailPassword } from '../database/database'; // Adjust the import path according to your project structure
// import { useNavigation, CommonActions  } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AuthContext = createContext<any>(null);

// export const AuthProvider = ({ children }:any) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();



//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const userData = await AsyncStorage.getItem('user');
//         if (userData) {
//           setUser(JSON.parse(userData));
//           navigation.dispatch(
//             CommonActions.reset({
//               index: 0,
//               routes: [{ name: 'Home' }],
//             })
//           );
//         }
//       } catch (error) {
//         console.error('Error loading user from AsyncStorage:', error);
//       }
//   }
//   loadUser();
// }, [navigation]);

//   const login = async (email:string, password:string) => {
//     try {
//       const user = await getUserByEmailPassword(email, password);
//       if (user) {
//         setUser(user);
//         

//         return user;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     }
//   };

//   const logout = async () => {
//     setUser(null);
    
//     await AsyncStorage.removeItem('user');
//     navigation.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name: 'Login' }],
//       })
//     );
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);