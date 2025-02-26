import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShift = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shift'

      short_name='Shift'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-320H120l360-440 360 440H640v320H320Zm80-80h160v-320h111L480-754 289-520h111v320Zm80-320Z"/>
    </Icon>
  );
});

IconMaterialShift.displayName = 'OnesyIconMaterialShift';

export default IconMaterialShift;
