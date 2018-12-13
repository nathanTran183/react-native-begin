import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

export const toSignIn = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'RNCourse.AuthScreen',
          }
        }],
        options: {
          topBar: {
            visible: false,
            drawBehind: true
          }
        }
      }
    }
  });
};
export const toHome = (tabIndex = 0) => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-share-alt" : "ios-share", 30, 'green'),
    Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30, 'green'),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30, 'green')
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
              options: {
                bottomTabs: {
                  visible: true,
                  translucent: true,
                  currentTabIndex: tabIndex,
                },
              },
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
                          icon: sources[2],
                          color: '#6d6acd'
                        }
                      ],
                    },
                    bottomTab: {
                      text: 'Find Place',
                      icon: sources[1],
                      iconColor: '#99b6de',
                      textColor: '#99b6de',
                      selectedIconColor: '#6d6acd',
                      selectedTextColor: '#6d6acd6d6acd',
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
                          icon: sources[2],
                          color: '#6d6acd'
                        }
                      ],
                    },
                    bottomTab: {
                      text: 'Place Detailed',
                      icon: sources[0],
                      iconColor: '#99b6de',
                      textColor: '#99b6de',
                      selectedIconColor: '#6d6acd',
                      selectedTextColor: '#6d6acd',
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