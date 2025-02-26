import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondW100Filled'

      short_name='Diamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m359-614 100-200h42l100 200H359Zm107 436L126-586h340v408Zm28 0v-408h340L494-178Zm138-436L532-814h212l100 200H632Zm-516 0 100-200h212L328-614H116Z"/>
    </Icon>
  );
});

IconMaterialDiamondW100Filled.displayName = 'OnesyIconMaterialDiamondW100Filled';

export default IconMaterialDiamondW100Filled;
