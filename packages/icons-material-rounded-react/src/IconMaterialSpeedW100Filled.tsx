import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedW100Filled'

      short_name='Speed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M434-356q16 16 42.5 14.5T516-360l149.06-202.78Q673-574 664-583q-9-9-20.27-1.11L440-436q-18 12-20.5 37.33Q417-373.35 434-356ZM204-212q-7.83 0-14.42-4.5Q183-221 178-228q-23-39-34.5-83T132-400q0-72.21 27.4-135.72 27.41-63.51 74.39-110.49 46.98-46.98 110.49-74.38Q407.79-748 480-748q71.93 0 135.1 26.96 63.16 26.97 110.53 73.5Q773-601 800.5-538.5 828-476 828-404.18 828-356 816.5-311 805-266 782-224q-4 7-10.9 9.5T756-212H204Z"/>
    </Icon>
  );
});

IconMaterialSpeedW100Filled.displayName = 'OnesyIconMaterialSpeedW100Filled';

export default IconMaterialSpeedW100Filled;
