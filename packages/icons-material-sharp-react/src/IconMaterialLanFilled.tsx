import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanFilled'

      short_name='Lan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Z"/>
    </Icon>
  );
});

IconMaterialLanFilled.displayName = 'OnesyIconMaterialLanFilled';

export default IconMaterialLanFilled;
