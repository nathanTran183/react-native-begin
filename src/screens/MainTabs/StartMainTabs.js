import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("map", 30, 'green'),
    Icon.getImageSource("place", 30, 'green')
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [{
            stack: {
              children: [{
                component: {
                  name: 'RNCourse.FindPlaceScreen',
                }
              }],
              options: {
                bottomTab: {
                  text: 'Find Place',
                  icon: sources[1]
                }
              }
            }
          },
          {
            stack: {
              children: [{
                component: {
                  name: 'RNCourse.SharePlaceScreen',
                }
              }],
              options: {
                bottomTab: {
                  text: 'Share Place',
                  icon: sources[0]
                }
              }
            }
          }]
        }
      }
    });
  })

}

export default startMainTabs;