import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdGroupOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffFilled'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-28 608-240H240v-368L28-820l56-56L876-84l-56 56ZM80-80v-640h80v560h560v80H80Zm748-165L353-720h447v-80H320v47l-75-75v-52h635v635h-52Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffFilled.displayName = 'OnesyIconMaterialAdGroupOffFilled';

export default IconMaterialAdGroupOffFilled;
