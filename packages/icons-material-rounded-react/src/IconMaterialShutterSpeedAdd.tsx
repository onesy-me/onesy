import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedAdd'

      short_name='ShutterSpeedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-160h-80q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h80v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80h80q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160h-80v80q0 17-11.5 28.5T760-40q-17 0-28.5-11.5T720-80v-80ZM400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 320h268q-18-62-61.5-109T584-700L480-520Zm-70 40 134-232q-16-4-32.5-6t-33.5-2q-45 0-89 14.5T306-660l104 180Zm-206 80h206L276-632q-42 47-62.5 106.5T204-400Zm172 220 104-180H212q18 62 61.5 109T376-180Zm104-260Zm42 277Zm238-278ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q64 0 121 21t104 58l29-29q11-11 27.5-11.5T790-750q11 11 11.5 27.5T791-694l-29 30q37 47 57.5 103T840-441q0 17-11.5 28.5T800-401q-17 0-28.5-11.5T760-441q0-10-.5-19.5T757-480H596L416-167q16 4 31.5 5.5T480-160q11 0 21-.5t21-2.5q17-2 30 7.5t15 26.5q2 17-7.5 30T533-84q-13 2-26 3t-27 1Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedAdd.displayName = 'OnesyIconMaterialShutterSpeedAdd';

export default IconMaterialShutterSpeedAdd;
