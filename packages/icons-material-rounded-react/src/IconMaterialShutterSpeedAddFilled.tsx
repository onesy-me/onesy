import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedAddFilled'

      short_name='ShutterSpeedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q64 0 121 21t104 58l29-29q11-11 27.5-11.5T790-750q11 11 11.5 27.5T791-694l-29 30q37 47 57.5 103T840-441q0 17-11.5 28.5T800-401q-17 0-28.5-11.5T760-441q0-116-82-197.5T480-720q-117 0-198.5 81.5T200-440q0 118 82.5 199T480-160q11 0 21-.5t21-2.5q17-2 30 7.5t15 26.5q2 17-7.5 30T533-84q-13 2-26 3t-27 1Zm40-123q1-45 16.5-84t42.5-70q27-31 63-51.5t78-28.5q0-11-1-21.5t-3-21.5H597L436-204q18 4 44 3.5t40-2.5Zm-40-317h226q-18-51-56-89.5T564-665l-84 145Zm-69 40 113-196q-51-10-102.5 3T327-625l84 145Zm-167 80h167L298-596q-35 39-49 90.5T244-400Zm152 185 84-145H254q17 50 55.5 89t86.5 56Zm3-625q-17 0-28-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H399Zm321 680h-80q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h80v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80h80q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160h-80v80q0 17-11.5 28.5T760-40q-17 0-28.5-11.5T720-80v-80Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedAddFilled.displayName = 'OnesyIconMaterialShutterSpeedAddFilled';

export default IconMaterialShutterSpeedAddFilled;
