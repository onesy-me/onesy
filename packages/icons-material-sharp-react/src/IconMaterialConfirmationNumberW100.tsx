import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConfirmationNumberW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberW100'

      short_name='ConfirmationNumber'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-316q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm0-150q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm0-150q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4ZM132-212v-146q36-17 58-49.5t22-72.5q0-40-22-72.5T132-602v-146h696v146q-36 17-58 49.5T748-480q0 40 22 72.5t58 49.5v146H132Zm28-28h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberW100.displayName = 'OnesyIconMaterialConfirmationNumberW100';

export default IconMaterialConfirmationNumberW100;
