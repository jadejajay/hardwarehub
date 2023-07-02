// import * as React from 'react';
// import type { SvgProps } from 'react-native-svg';
// import Svg, { Path } from 'react-native-svg';
// export const Saved = (props: SvgProps) => (
//   <Svg
//     xmlns="http://www.w3.org/2000/svg"
//     preserveAspectRatio="xMidYMid"
//     viewBox="-25.6 -25.6 307.2 307.2"
//     {...props}
//   >
//     <Path
//       fill="#df50f2"
//       d="M159.412 2.833c-10.037 0-20.342 2.57-30.069 8.205l-99.13 57.428c-40.432 23.422-40.247 81.96.33 104.763l99.615 55.98c9.47 5.32 19.472 7.751 29.222 7.751 31.61 0 60.6-25.534 60.45-60.889l-.485-113.406c-.149-34.957-28.722-59.832-59.933-59.832m0 8.69c13.07 0 26.048 5.246 35.606 14.394 10.024 9.594 15.578 22.657 15.638 36.785l.485 113.406c.06 13.934-5.249 26.971-14.944 36.708-9.78 9.822-23.199 15.454-36.817 15.454-8.728 0-17.127-2.233-24.965-6.637l-99.614-55.98c-16.228-9.118-25.989-25.724-26.11-44.42-.125-18.875 9.55-35.79 25.877-45.249L133.7 18.557c8.057-4.668 16.708-7.035 25.713-7.035"
//     />
//     <Path
//       fill="#b55ce6"
//       d="M95.072 0C63.17 0 33.835 25.485 33.835 61.223v116.353c0 35.661 29.275 61.22 61.216 61.22 10.083 0 20.43-2.546 30.207-8.125l99.906-57.003c40.7-23.222 41.213-81.718.928-105.649L126.185 8.67C116.162 2.712 105.48 0 95.072 0m0 8.69c9.38 0 18.355 2.505 26.675 7.448l99.907 59.351c16.23 9.642 25.82 26.667 25.655 45.544-.166 18.877-10.054 35.733-26.45 45.088l-99.907 57.003c-8.12 4.633-16.835 6.982-25.9 6.982-13.422 0-26.752-5.4-36.573-14.819-10.288-9.866-15.955-23.259-15.955-37.71V61.222c0-32.449 27.277-52.534 52.548-52.534"
//     />
//     <Path
//       fill="#b545a6"
//       d="M215.22 129.786c-.303 0-.589-.058-.884-.09l4.726-8.183-4.726-8.184c.294-.031.581-.09.884-.09 4.562 0 8.272 3.712 8.272 8.274 0 4.563-3.71 8.273-8.272 8.273Zm-42.722 51.149c-7.675 0-14.152 5.1-16.245 12.095h-58.54c-2.093-6.994-8.57-12.095-16.245-12.095-1.067 0-2.107.11-3.12.298l-27.804-48.157c2.83-3.031 4.576-7.088 4.576-11.563 0-4.474-1.745-8.532-4.576-11.563l27.342-47.357c1.156.248 2.352.386 3.582.386 7.995 0 14.68-5.538 16.474-12.981h58.809c2.498 6.255 8.6 10.68 15.747 10.68.461 0 .914-.033 1.367-.07l28.674 49.667c-2.656 2.993-4.282 6.921-4.282 11.238 0 4.317 1.626 8.245 4.282 11.24l-27.904 48.33a17.129 17.129 0 0 0-2.137-.148Zm-6.656 12.095a8.292 8.292 0 0 1 3.497-2.773l-1.601 2.773h-1.896Zm14.929 4.867c0 4.563-3.711 8.274-8.273 8.274-3.176 0-5.908-1.82-7.294-4.452h7.551l5.584-9.673a8.241 8.241 0 0 1 2.432 5.85Zm-97.447-8.046a8.262 8.262 0 0 1 4.8 3.179h-2.966l-1.834-3.179Zm-1.856 16.32c-4.561 0-8.273-3.712-8.273-8.274 0-1.928.691-3.681 1.801-5.09l5.146 8.912h8.62c-1.386 2.632-4.118 4.452-7.294 4.452Zm-43.31-76.385c-4.562 0-8.273-3.71-8.273-8.273 0-4.562 3.711-8.273 8.273-8.273.146 0 .284.035.429.044l-4.752 8.23 4.751 8.229c-.145.007-.282.043-.428.043Zm8.272-8.273c0 1.16-.244 2.262-.676 3.264l-1.886-3.264 1.886-3.264a8.227 8.227 0 0 1 .676 3.264Zm42.246-71.516a8.245 8.245 0 0 1-5.921 4.163l2.403-4.162h3.518Zm-15.481-3.98c0-4.562 3.712-8.273 8.273-8.273 2.811 0 5.291 1.416 6.787 3.563h-8.113l-5.447 9.435a8.214 8.214 0 0 1-1.5-4.725Zm94.965 4.71a8.23 8.23 0 0 1-.983-.73h.561l.422.73Zm4.338-15.284c4.562 0 8.273 3.71 8.273 8.273 0 2.54-1.176 4.788-2.984 6.307l-5.032-8.716h-8.131c1.038-3.383 4.155-5.864 7.874-5.864Zm34.449 86.07c0-.964.197-1.875.502-2.737l1.579 2.737-1.579 2.736c-.305-.86-.502-1.772-.502-2.736Zm8.273-16.962a16.91 16.91 0 0 0-5.43.903l-27.61-47.821c4.397-3.066 7.28-8.153 7.28-13.918 0-9.368-7.594-16.963-16.962-16.963-8.549 0-15.6 6.33-16.772 14.555H97.754c-2.043-7.074-8.554-12.252-16.286-12.252-9.368 0-16.962 7.595-16.962 16.962 0 5.01 2.185 9.5 5.64 12.604l-26.956 46.69a16.938 16.938 0 0 0-5.032-.76c-9.369 0-16.963 7.593-16.963 16.962 0 9.368 7.594 16.963 16.963 16.963a16.97 16.97 0 0 0 5.032-.76l27.292 47.272c-3.653 3.11-5.976 7.736-5.976 12.909 0 9.369 7.594 16.963 16.962 16.963 8.052 0 14.779-5.617 16.514-13.142h58.002c1.735 7.526 8.462 13.142 16.514 13.142 9.368 0 16.962-7.595 16.962-16.964 0-5.508-2.639-10.391-6.71-13.49l27.04-46.835c1.706.578 3.529.905 5.43.905 9.368 0 16.962-7.595 16.962-16.963 0-9.369-7.594-16.962-16.962-16.962Z"
//     />
//     <Path
//       fill="#FFF"
//       d="M182.134 43.715c0 5.321-4.314 9.636-9.636 9.636-5.322 0-9.636-4.315-9.636-9.636a9.636 9.636 0 0 1 9.636-9.636 9.636 9.636 0 0 1 9.636 9.636M91.104 46.017a9.636 9.636 0 0 1-9.636 9.636c-5.322 0-9.635-4.314-9.635-9.636a9.635 9.635 0 0 1 9.635-9.635c5.322 0 9.636 4.314 9.636 9.635M47.793 121.513a9.636 9.636 0 0 1-9.636 9.636c-5.322 0-9.635-4.314-9.635-9.636 0-5.32 4.313-9.636 9.635-9.636s9.636 4.315 9.636 9.636M91.104 197.897a9.636 9.636 0 0 1-9.636 9.636c-5.322 0-9.635-4.314-9.635-9.636 0-5.321 4.313-9.636 9.635-9.636s9.636 4.315 9.636 9.636M182.134 197.897a9.636 9.636 0 0 1-9.636 9.636 9.636 9.636 0 0 1-9.636-9.636c0-5.321 4.314-9.636 9.636-9.636 5.322 0 9.636 4.315 9.636 9.636"
//     />
//     <Path
//       fill="#FFF"
//       d="M224.856 121.513a9.636 9.636 0 0 1-9.636 9.636c-5.322 0-9.635-4.314-9.635-9.636 0-5.32 4.313-9.636 9.635-9.636s9.636 4.315 9.636 9.636"
//     >
//       {'\\'}
//     </Path>
//   </Svg>
// );
// export default SvgComponent
import * as React from 'react';

import { Image, View } from '@/ui';

type Props = {};
export const Saved = ({}: Props) => {
  return (
    <View className="justify-center">
      <Image
        source={require('../../../assets/icon/globe.gif')}
        style={{ width: 32, height: 32 }}
      />
    </View>
  );
};