import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityMidW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMidW100'

      short_name='HumidityMid'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-152q-111.39 0-189.69-76.71Q212-305.41 212-415.47 212-468 233.5-516t56.5-86l190-186 190 186q35 38 56.5 86.04Q748-467.92 748-415.28 748-305 669.69-228.5 591.39-152 480-152ZM240-415h480q0-47-18-89.86-18-42.87-52-75.14L480-748 310-580q-34 32.27-52 75.14Q240-462 240-415Z"/>
    </Icon>
  );
});

IconMaterialHumidityMidW100.displayName = 'OnesyIconMaterialHumidityMidW100';

export default IconMaterialHumidityMidW100;
