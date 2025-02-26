import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorFilled'

      short_name='Escalator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-240h192l200-360h128v-120H548L348-360H220v120ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialEscalatorFilled.displayName = 'OnesyIconMaterialEscalatorFilled';

export default IconMaterialEscalatorFilled;
