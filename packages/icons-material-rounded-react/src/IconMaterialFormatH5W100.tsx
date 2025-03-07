import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH5W100'

      short_name='FormatH5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h212v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H200v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM534-306q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h194q14 0 23-9t9-23v-68q0-14-9-23t-23-9H550q-12.75 0-21.37-8.5Q520-483 520-496.49v-127.02q0-13.49 8.63-21.99 8.62-8.5 21.37-8.5h224q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H548v132h180q24.75 0 42.38 17.62Q788-458.75 788-434v68q0 24.75-17.62 42.37Q752.75-306 728-306H534Z"/>
    </Icon>
  );
});

IconMaterialFormatH5W100.displayName = 'OnesyIconMaterialFormatH5W100';

export default IconMaterialFormatH5W100;
