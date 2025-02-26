import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDualScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreen'

      short_name='DualScreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-256 240 96v-544l-240-96v544Zm-80 54v-678h80l320 121v717L160-202Zm320 2v-80h240v-520H240v-80h560v680H480Zm-240-56v-544 544Z"/>
    </Icon>
  );
});

IconMaterialDualScreen.displayName = 'OnesyIconMaterialDualScreen';

export default IconMaterialDualScreen;
