import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessEmptyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmptyW100Filled'

      short_name='BrightnessEmpty'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M367.63-212H272q-24.75 0-42.37-17.63Q212-247.25 212-272v-95.63L142-438q-9-9-13-19.81-4-10.82-4-22 0-11.19 4-22.19 4-11 13-20l70-70.37V-688q0-24.75 17.63-42.38Q247.25-748 272-748h95.63L438-818q9-9 19.81-13 10.82-4 22-4 11.19 0 22.19 4 11 4 20 13l70.37 70H688q24.75 0 42.38 17.62Q748-712.75 748-688v95.63L818-522q9 9 13 19.81 4 10.82 4 22 0 11.19-4 22.19-4 11-13 20l-70 70.37V-272q0 24.75-17.62 42.37Q712.75-212 688-212h-95.63L522-142q-9 9-19.81 13-10.82 4-22 4-11.19 0-22.19-4-11-4-20-13l-70.37-70Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmptyW100Filled.displayName = 'OnesyIconMaterialBrightnessEmptyW100Filled';

export default IconMaterialBrightnessEmptyW100Filled;
