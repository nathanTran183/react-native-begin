import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';


const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("map", 30, 'green'),
    Icon.getImageSource("place", 30, 'green'),
    Icon.getImageSource("menu", 30, 'green')
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'RNCourse.SideDrawerScreen'
            }            
          },
          center: {
            bottomTabs: {
              id: 'BottomTabsId',
              children: [{
                stack: {
                  children: [{
                    component: {
                      name: 'RNCourse.FindPlaceScreen',
                    }
                  }],
                  options: {
                    topBar: {
                      leftButtons: [
                        {
                          id: 'leftButton',
                          icon: sources[2]
                        }
                      ],
                    },
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
                    topBar: {
                      leftButtons: [
                        {
                          id: 'leftButton',
                          icon: sources[2]
                        }
                      ],
                    },
                    bottomTab: {
                      text: 'Share Place',
                      icon: sources[0]
                    }
                  }
                }
              }]
            }
          }
        }
      }
    });
  });
}

export default startMainTabs;