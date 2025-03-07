import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTranscribeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranscribeFilled'

      short_name='Transcribe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M850-750q6-6 14.5-9.5T882-763q19 0 32 13t13 32q0 9-3.5 17.5T914-686q-18 18-29 38.5T874-600q0 25 10.5 46t27.5 38q8 7 11.5 15.5T927-482q0 19-13 32t-32 13q-9 0-17.5-3.5T850-450q-32-29-50-67.5T782-600q0-44 18-82.5t50-67.5ZM722-878q6-6 14-9.5t17-3.5q19 0 32 13t13 32q0 10-4 18.5T783-813q-43 41-68 95.5T690-600q0 63 24.5 118t67.5 96q7 6 11 14.5t4 18.5q0 18-13 31t-31 13q-9 0-17-3.5t-14-9.5q-56-53-89-125t-33-153q0-81 33-153t89-125ZM360-440q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-200v-32q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v32q0 33-23.5 56.5T600-120H120q-33 0-56.5-23.5T40-200Z"/>
    </Icon>
  );
});

IconMaterialTranscribeFilled.displayName = 'OnesyIconMaterialTranscribeFilled';

export default IconMaterialTranscribeFilled;
