import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions/authActions';
import {useNavigation} from '@react-navigation/native';

export default function useHandleLogout() {
  const dispatch = useDispatch();
  const {reset} = useNavigation();
  const handleLogout = () => {
    dispatch(logout());
    reset({
      index: 0,
      routes: [
        {
          name: 'LoginScreen',
        },
      ],
    });
  };

  return handleLogout;
}
