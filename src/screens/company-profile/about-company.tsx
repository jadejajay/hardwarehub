import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const AboutUs = ({ style }) => {
  return (
    <View style={style}>
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.userProfile}>
          <View style={styles.userProfileBody}>
            <View style={styles.grid}>
              <View style={styles.gridContent}>
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <View style={styles.sectionHeading}>
                      <View style={styles.sectionHeadingMain}>
                        <Text
                          style={styles.sectionHeadingText}
                          numberOfLines={1}
                        >
                          About
                        </Text>
                      </View>
                    </View>
                    <View style={styles.sectionContent}>
                      <Text style={styles.typography}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. At aut debitis enim eos facilis, impedit labore
                        mollitia placeat praesentium quos sit suscipit totam
                        veritatis. Deleniti incidunt necessitatibus omnis porro
                        unde!
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <View style={styles.sectionHeading}>
                      <View style={styles.sectionHeadingMain}>
                        <Text
                          style={styles.sectionHeadingText}
                          numberOfLines={1}
                        >
                          Product Range
                        </Text>
                      </View>
                    </View>
                    <View style={styles.sectionContent}>
                      <View style={styles.hStack}>
                        <View style={styles.hStackContent}>
                          <View style={styles.hStackItemWrap}>
                            <View style={styles.tag}>
                              <Text style={styles.tagText} numberOfLines={1}>
                                Handles
                              </Text>
                            </View>
                          </View>
                          <View style={styles.hStackItemWrap}>
                            <View style={styles.tag}>
                              <Text style={styles.tagText} numberOfLines={1}>
                                knobs
                              </Text>
                            </View>
                          </View>
                          <View style={styles.hStackItemWrap}>
                            <View style={styles.tag}>
                              <Text style={styles.tagText} numberOfLines={2}>
                                Hardware tools
                              </Text>
                            </View>
                          </View>
                          <View style={styles.hStackItemWrap}>
                            <View style={styles.tag}>
                              <Text style={styles.tagText} numberOfLines={1}>
                                Aldrop
                              </Text>
                            </View>
                          </View>
                          <View style={styles.hStackItemWrap}>
                            <View style={styles.tag}>
                              <Text style={styles.tagText} numberOfLines={1}>
                                Knuckles
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexA: {
    flex: 1,
  },
  base: {
    flexGrow: 1,
  },
  userProfile: {
    flex: 1,
  },
  userProfileTop: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
    minHeight: 380,
  },
  userProfileTopBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  userProfileTopOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    backgroundColor: '#000000',
    opacity: 0.2,
  },
  avatar: {
    flexShrink: 0,
    width: 128,
    height: 128,
  },
  avatarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderRadius: 64,
    backgroundColor: '#a8bac1',
    overflow: 'hidden',
  },
  avatarImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  avatarStatus: {
    position: 'absolute',
    right: 10.1,
    bottom: 10.1,
    width: 20,
    height: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#67ab5b',
  },
  userProfileInfo: {
    paddingHorizontal: 24,
  },
  userProfileInfoName: {
    marginTop: 16,
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center',
  },
  userProfileInfoJobTitle: {
    marginTop: 4,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
  },
  userProfileWidget: {
    alignSelf: 'stretch',
    margin: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  widget: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    paddingVertical: 8,
    minHeight: 60,
  },
  widgetItem: {
    flex: 1,
    justifyContent: 'center',
    minWidth: 0,
    paddingVertical: 4,
    borderRightWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  widgetItemLast: {
    borderRightWidth: 0,
  },
  widgetItemLabel: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.5,
  },
  widgetItemValue: {
    marginTop: 4,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  userProfileBody: {
    flexGrow: 1,
    paddingTop: 24,
    paddingBottom: 100,
  },
  flexB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  btnA: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    minWidth: 130,
    maxWidth: '100%',
    paddingHorizontal: 24,
    backgroundColor: '#299cd1',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#299cd1',
    overflow: 'hidden',
  },
  btnTextA: {
    color: '#ffffff',
    fontSize: 20,
  },
  btnB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    minWidth: 130,
    maxWidth: '100%',
    paddingHorizontal: 24,
    backgroundColor: '#ffffff00',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#032535',
    overflow: 'hidden',
  },
  btnTextB: {
    color: '#032535',
    fontSize: 20,
  },
  typography: {
    fontSize: 16,
  },
  section: {},
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 30,
    paddingHorizontal: 24,
  },
  sectionHeadingMain: {
    flexShrink: 1,
  },
  sectionHeadingText: {
    fontSize: 26,
    color: '#1c1c1c',
  },
  sectionContent: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  hStack: {
    overflow: 'hidden',
  },
  hStackContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -4,
    marginHorizontal: -4,
  },
  hStackItemWrap: {
    paddingVertical: 4,
    paddingHorizontal: 4,
    minWidth: 0,
    flexShrink: 0,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 28,
    maxWidth: 140,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#a8bac1',
    borderRadius: 14,
    overflow: 'hidden',
  },
  tagText: {
    fontSize: 16,
    color: '#1c1c1c',
    flexShrink: 1,
  },
  grid: {
    overflow: 'hidden',
    flexShrink: 0,
  },
  gridContent: {
    flexShrink: 0,
    flexWrap: 'nowrap',
    marginVertical: -8,
  },
  gridItem: {
    paddingVertical: 8,
    minWidth: 0,
    minHeight: 0,
    flexShrink: 0,
  },
});
