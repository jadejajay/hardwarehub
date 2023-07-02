import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import { Image, TouchableOpacity, View } from '@/ui';
import { GradientText } from '@/ui';

type Props = { stories: any };
export const StoriesList = ({ stories }: Props) => {
  const { navigate } = useNavigation();
  const handleStoryPress = () => {
    navigate('Stories');
  };
  return (
    <View className="mt-8 h-20">
      <View className="absolute bottom-16 left-2">
        <GradientText t="Stories" />
      </View>

      <View className="flex-row px-4">
        {stories.map(
          (
            story: { image: any; unread: any },
            index: React.Key | null | undefined
          ) => (
            <TouchableOpacity key={index} onPress={handleStoryPress}>
              <View className="mr-4 mt-2 items-center ">
                <View className="h-16 w-16 overflow-hidden rounded-full border">
                  <Image
                    source={{ uri: story.image }}
                    className="h-full w-full"
                    contentFit="cover"
                  />
                </View>
                {story.unread && (
                  <View className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-blue-500 " />
                )}
              </View>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
};
