import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactless = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contactless'

      short_name='Contactless'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276-480q0 9-1 18.5t-3 18.5q-3 17 4 32.5t23 21.5q16 6 30.5-1t18.5-23q4-16 6-33t2-34q0-17-2-34t-6-33q-4-16-18.5-23t-30.5-1q-16 6-23 21.5t-4 32.5q2 9 3 18.5t1 18.5Zm140 0q0 24-3 47t-9 45q-5 17 1.5 32t21.5 21q16 7 31.5-.5T479-360q9-29 13-59t4-61q0-31-4-61t-13-59q-5-17-20.5-24.5T427-625q-15 6-21.5 21t-1.5 32q6 22 9 45t3 47Zm140 0q0 37-5 72.5T535-338q-5 17 .5 33t21.5 23q16 7 31.5 0t20.5-24q14-42 20.5-85t6.5-89q0-46-6.5-89T609-654q-5-17-20.5-24t-31.5 0q-16 7-21.5 23t-.5 33q11 34 16 69.5t5 72.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialContactless.displayName = 'OnesyIconMaterialContactless';

export default IconMaterialContactless;
