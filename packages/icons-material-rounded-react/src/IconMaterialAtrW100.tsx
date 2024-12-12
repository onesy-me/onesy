import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAtrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtrW100'

      short_name='Atr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M288-230q-37.5 0-63.75-26.25T198-320q0-37.5 26.25-63.75T288-410q37.5 0 63.75 26.25T378-320q0 37.5-26.25 63.75T288-230Zm384 0q-37.5 0-63.75-26.25T582-320q0-37.5 26.25-63.75T672-410q37.5 0 63.75 26.25T762-320q0 37.5-26.25 63.75T672-230ZM480-550q-37.5 0-63.75-26.25T390-640q0-37.5 26.25-63.75T480-730q37.5 0 63.75 26.25T570-640q0 37.5-26.25 63.75T480-550Z"/>
    </Icon>
  );
});

IconMaterialAtrW100.displayName = 'OnesyIconMaterialAtrW100';

export default IconMaterialAtrW100;
