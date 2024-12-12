import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConfirmationNumberW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberW100Filled'

      short_name='ConfirmationNumber'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.04-316q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm0-150q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4Zm0-150q5.96 0 9.96-4.04 4-4.03 4-10 0-5.96-4.04-9.96-4.03-4-10-4-5.96 0-9.96 4.04-4 4.03-4 10 0 5.96 4.04 9.96 4.03 4 10 4ZM132-212v-146q36-17 58-49.5t22-72.5q0-40-22-72.5T132-602v-146h696v146q-36 17-58 49.5T748-480q0 40 22 72.5t58 49.5v146H132Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberW100Filled.displayName = 'OnesyIconMaterialConfirmationNumberW100Filled';

export default IconMaterialConfirmationNumberW100Filled;
