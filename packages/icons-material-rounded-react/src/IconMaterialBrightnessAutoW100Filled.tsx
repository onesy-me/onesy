import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoW100Filled'

      short_name='BrightnessAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-320h30l26-65q8-20 32.75-31.5T509-428q20.97 0 38.98 11.5Q566-405 574-385l22 56q2.36 5.11 5.64 7.05Q604.93-320 610-320h.32q7.68 0 12-5.95 4.31-5.94 1.68-14.05L490-676q-1-2-3.65-3t-8.47-1q-1.88 0-3.38 1t-2.5 3L332-320Zm84-134 62-164h4l64 164H416Zm-48.37 242H272q-24.75 0-42.37-17.63Q212-247.25 212-272v-95.63L142-438q-9-9-13-19.81-4-10.82-4-22 0-11.19 4-22.19 4-11 13-20l70-70.37V-688q0-24.75 17.63-42.38Q247.25-748 272-748h95.63L438-818q9-9 19.81-13 10.82-4 22-4 11.19 0 22.19 4 11 4 20 13l70.37 70H688q24.75 0 42.38 17.62Q748-712.75 748-688v95.63L818-522q9 9 13 19.81 4 10.82 4 22 0 11.19-4 22.19-4 11-13 20l-70 70.37V-272q0 24.75-17.62 42.37Q712.75-212 688-212h-95.63L522-142q-9 9-19.81 13-10.82 4-22 4-11.19 0-22.19-4-11-4-20-13l-70.37-70Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoW100Filled.displayName = 'OnesyIconMaterialBrightnessAutoW100Filled';

export default IconMaterialBrightnessAutoW100Filled;
