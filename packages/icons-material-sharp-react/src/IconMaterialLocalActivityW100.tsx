import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivityW100'

      short_name='LocalActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m406-372 74-58 72 56-28-90 78-60h-92l-30-92-30 92h-92l76 60-28 92ZM132-212v-146q36-17 58-49.5t22-72.5q0-40-22-72.5T132-602v-146h696v146q-36 17-58 49.5T748-480q0 40 22 72.5t58 49.5v146H132Zm28-28h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z"/>
    </Icon>
  );
});

IconMaterialLocalActivityW100.displayName = 'OnesyIconMaterialLocalActivityW100';

export default IconMaterialLocalActivityW100;
