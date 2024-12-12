import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOff'

      short_name='PowerOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M380-120v-120L240-380v-297h43l77 77h-40v186l140 140v74h40v-74l37-37L56-792l56-56 736 736-56 56-198-198-14 14v120H380Zm306-268-46-46v-166H474L320-754v-86h80v160h160v-160h80v160h80v258l-34 34ZM558-516Zm-130 97Z"/>
    </Icon>
  );
});

IconMaterialPowerOff.displayName = 'OnesyIconMaterialPowerOff';

export default IconMaterialPowerOff;
