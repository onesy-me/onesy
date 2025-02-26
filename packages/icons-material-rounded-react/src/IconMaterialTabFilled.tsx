import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabFilled'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm400-400h240v-160H520v120q0 17 11.5 28.5T560-560Z"/>
    </Icon>
  );
});

IconMaterialTabFilled.displayName = 'OnesyIconMaterialTabFilled';

export default IconMaterialTabFilled;
