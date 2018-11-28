import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("map", 30),
    Icon.getImageSource("place", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: "HomePageBottomTabs",
          children: [
            {
              component: {
                name: 'RNCourse.SharePlaceScreen',
                options: {
                  bottomTab: {
                    text: 'Tab 1',
                    icon: sources[0]
                  }
                }
              }
            },
            {
              component: {
                name: 'RNCourse.FindPlaceScreen',
                options: {
                  bottomTab: {
                    text: 'Tab 2',
                    icon: sources[1]
                  }
                }
              }
            }
          ]
        }
      }
    });
  })

}

export default startMainTabs;