import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChurchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchFilled'

      short_name='Church'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-188q0-24 13-43.5t35-29.5l112-50v-80q0-23 12-41.5t32-29.5l156-78v-60h-40q-17 0-28.5-11.5T360-800q0-17 11.5-28.5T400-840h40v-40q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v40h40q17 0 28.5 11.5T600-800q0 17-11.5 28.5T560-760h-40v60l156 78q20 11 32 29.5t12 41.5v80l112 50q22 10 35 29.5t13 43.5v188q0 33-23.5 56.5T800-80H600q-17 0-28.5-11.5T560-120v-80q0-33-23.5-56.5T480-280q-33 0-56.5 23.5T400-200v80q0 17-11.5 28.5T360-80H160q-33 0-56.5-23.5T80-160Zm400-260q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Z"/>
    </Icon>
  );
});

IconMaterialChurchFilled.displayName = 'OnesyIconMaterialChurchFilled';

export default IconMaterialChurchFilled;
