import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../themes/colors';
import sizeValues from '../../themes/sizeValues';

const shareIconHeight = 40;
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  subContainer: {
    padding: sizeValues.size16,
  },
  scrollView: {
    marginTop: -scale(shareIconHeight / 2),
  },
  title: {
    fontSize: sizeValues.fontLarge,
    fontWeight: '700',
    lineHeight: scale(22),
  },
  shadeBlack: {
    position: 'absolute',
    width: '100%',
    height: scale(10),
    backgroundColor: colorThemes.whiteBackground,
    opacity: 0.6,
    zIndex: 1,
    elevation: 10,
  },
  priceandFavView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    marginTop: scale(5),
    marginBottom: scale(5),
    height: scale(25),
    borderRadius: scale(25 / 2),
    alignSelf: 'flex-start',
    color: colorThemes.whiteBackground,
    fontSize: sizeValues.fontSmall,
    verticalAlign: 'middle',
    paddingLeft: scale(10),
    paddingRight: scale(10),
    backgroundColor: colorThemes.black1,
  },
  price: {
    fontSize: sizeValues.fontLarge,
    fontWeight: 'bold',
    color: colorThemes.red,
    marginBottom: scale(15),
  },
  label: {
    color: colorThemes.black1,
    fontSize: sizeValues.fontNormal,
    marginTop: scale(15),
  },
  desc: {
    marginTop: scale(10),
    textAlign: 'justify',
  },
  shareBtn: {
    height: scale(shareIconHeight),
    width: scale(shareIconHeight),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(shareIconHeight / 2),
    elevation: 3,
    marginTop: -scale(shareIconHeight / 2),
    alignSelf: 'flex-end',
    marginRight: scale(20),
    backgroundColor: colorThemes.brandColor,
    zIndex: 9,
  },
  userInfoCard: {
    padding: scale(7),
    marginTop: scale(10),
    backgroundColor: colorThemes.bgWhiteGray,
    borderWidth: 1,
    borderColor: colorThemes.black40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userIconName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: sizeValues.fontMedium,
    marginLeft: scale(7),
  },
  postedByLabel: {
    fontWeight: '600',
    marginTop: scale(60),
  },
  chatButton: {
    backgroundColor: colorThemes.brandColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(45),
    flexDirection: 'row',
  },
  chatLabel: {
    color: colorThemes.whiteTextColor,
    marginRight: scale(10),
    fontSize: sizeValues.fontLarge,
  },
  descLabel: {
    marginTop: scale(30),
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportButton: {
    marginTop: scale(40),
    alignSelf: 'flex-end',
  },
  reportLabel: {
    color: colorThemes.brandColor,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  loading: {
    position: 'absolute',
    zIndex: 1,
  },
});
