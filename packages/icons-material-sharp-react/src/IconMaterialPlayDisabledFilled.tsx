import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledFilled'

      short_name='PlayDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M658-416 320-754v-6l440 280-102 64ZM790-56 520-328 320-200v-328L56-792l56-56 736 736-58 56Z"/>
    </Icon>
  );
});

IconMaterialPlayDisabledFilled.displayName = 'OnesyIconMaterialPlayDisabledFilled';

export default IconMaterialPlayDisabledFilled;
