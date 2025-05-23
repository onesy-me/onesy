import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStackOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackOffW100'

      short_name='StackOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m828-244-28-28v-256q0-13-9.5-22.5T768-560H512l-28-28h284q24.75 0 42.38 17.62Q828-552.75 828-528v284ZM272-800l-28-28h284q24.75 0 42.38 17.62Q588-792.75 588-768v80h-28v-80q0-13-9.5-22.5T528-800H272Zm384 384ZM432-160h328L400-520v328q0 14 9 23t23 9Zm0 28q-25.5 0-42.75-17.25T372-192v-356L160-760v360h112v28h-80q-25.5 0-42.75-17.25T132-432v-356l-9.9-9.9q-4.1-4.1-4.6-9.6T122-818q5-5 10-5t10 5l676 676q4 4 4.5 9.5T818-122q-5 5-10 5t-10-5l-10-10H432Zm148-208Z"/>
    </Icon>
  );
});

IconMaterialStackOffW100.displayName = 'OnesyIconMaterialStackOffW100';

export default IconMaterialStackOffW100;
