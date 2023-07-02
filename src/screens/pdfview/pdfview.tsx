import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

import { View } from '@/ui';

type Props = {};
export const PdfView = ({}: Props) => {
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  return (
    <View className="flex-1">
      <Pdf
        trustAllCerts={false}
        source={source}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
