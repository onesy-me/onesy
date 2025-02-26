import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControllerGen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControllerGen'

      short_name='ControllerGen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm0-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-28-132q11 11 28 11t28-11l56-56q11-11 11-28t-11-28q-11-11-28-11t-28 11l-56 56q-11 11-11 28t11 28ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialControllerGen.displayName = 'OnesyIconMaterialControllerGen';

export default IconMaterialControllerGen;
