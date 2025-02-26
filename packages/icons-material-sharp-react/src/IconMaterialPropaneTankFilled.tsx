import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPropaneTankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTankFilled'

      short_name='PropaneTank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440v-120q0-57 34-99t86-56v-165h400v165q52 14 86 56t34 99v120H160ZM320-80q-66 0-113-47t-47-113v-120h640v120q0 66-47 113T640-80H320Zm40-640h80v-40h80v40h80v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankFilled.displayName = 'OnesyIconMaterialPropaneTankFilled';

export default IconMaterialPropaneTankFilled;
