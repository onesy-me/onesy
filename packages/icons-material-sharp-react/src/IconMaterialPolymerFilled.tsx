import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolymerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerFilled'

      short_name='Polymer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M198-160 20-480l180-320h160L180-480l104 186 312-506h164l180 320-180 320H600l180-320-104-184-310 504H198Z"/>
    </Icon>
  );
});

IconMaterialPolymerFilled.displayName = 'OnesyIconMaterialPolymerFilled';

export default IconMaterialPolymerFilled;
