import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxFilled'

      short_name='CheckBox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialCheckBoxFilled.displayName = 'OnesyIconMaterialCheckBoxFilled';

export default IconMaterialCheckBoxFilled;
