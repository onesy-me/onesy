import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToastFilled'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h400q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320H280q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm-80 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialToastFilled.displayName = 'OnesyIconMaterialToastFilled';

export default IconMaterialToastFilled;
