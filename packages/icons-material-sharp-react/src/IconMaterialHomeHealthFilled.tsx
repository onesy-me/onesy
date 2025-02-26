import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeHealthFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthFilled'

      short_name='HomeHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-280h120v-100h100v-120H540v-100H420v100H320v120h100v100ZM160-120v-480l320-240 320 240v480H160Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthFilled.displayName = 'OnesyIconMaterialHomeHealthFilled';

export default IconMaterialHomeHealthFilled;
