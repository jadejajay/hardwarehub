import { Avatar, ListItem } from '@rneui/base';
import * as React from 'react';

import { View } from '@/ui';

type Props = {
  style: any;
};

const Data = [
  {
    name: 'John Doe',
    Phone: '+1 234 567 890',
  },
  {
    name: 'Bol doe',
    Phone: '+7 123 456 789',
  },
];
export const Contacts = ({ style }: Props) => {
  return (
    <View style={style}>
      {Data.map((item) => (
        <ListItem bottomDivider>
          <Avatar
            rounded
            icon={{
              name: 'person-outline',
              type: 'material',
              size: 26,
            }}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{ backgroundColor: '#c2c2c2' }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.Phone}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};
