import {StyleSheet} from 'react-native';

export const gStyles = StyleSheet.create({
  //alignSelf
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

  //flex
  flex1: {
    flex: 1,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowCenterBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
  },
  itemsCenter: {
    alignItems: 'center',
  },

  //margin
  ma4: {
    margin: 16,
  },
  ml4: {
    marginLeft: 16,
  },
  mr4: {
    marginRight: 16,
  },
  mh4: {
    marginRight: 16,
    marginLeft: 16,
  },
  mv2: {
    marginBottom: 8,
    marginTop: 8,
  },
  mv4: {
    marginBottom: 16,
    marginTop: 16,
  },
  mt4: {
    marginTop: 16,
  },
  mt0: {
    marginTop: 0,
  },
  mb4: {
    marginBottom: 16,
  },
  mb0: {
    marginBottom: 0,
  },

  //padding
  pa4: {
    padding: 16,
  },
  pl4: {
    paddingLeft: 16,
  },
  pr4: {
    paddingRight: 16,
  },
  ph4: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  //border-radius
  brt2: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  brb2: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  //avatar
  avatarWrapper: {
    alignSelf: 'center',
    width: 80,
    height: 80,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    // backgroundColor: Colors.PRIMARY_COLOR,
    marginBottom: 12,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    // backgroundColor: Colors.PRIMARY_COLOR,
    padding: 6,
    borderRadius: 20,
  },

  //shadow
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  //emptyState
  emptyState: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 60,
  },
  fontMedium: {
    fontWeight: '500',
    fontFamily: 'Rubik-Medium',
  },
  fontSemiBold: {
    fontWeight: '600',
    fontFamily: 'Rubik-SemiBold',
  },
  fontBold: {
    fontWeight: '700',
    fontFamily: 'Rubik-Bold',
  },
});
