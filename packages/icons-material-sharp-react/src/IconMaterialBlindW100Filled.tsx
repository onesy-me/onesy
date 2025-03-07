import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindW100Filled'

      short_name='Blind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m217-77-22-17 135-171-22-161q-8-48 1-109t31-115l-119 73v131h-28v-147l161-98q17-11 30.5-15t27.5-4q16 0 27.5 7.5T462-677l33 54q31 51 78 79t100 28v28h-36L817-88l-25 12-190-423q-45-15-81-47t-71-90q-24 60-34 112.5t-5 88.5l80 147v212h-28v-197L361-415l-2 160L217-77Zm242-699q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialBlindW100Filled.displayName = 'OnesyIconMaterialBlindW100Filled';

export default IconMaterialBlindW100Filled;
