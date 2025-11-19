import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileArrowUpRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileArrowUpRightFilled'

      short_name='MobileArrowUpRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m396-340 124-124v104h80v-240H360v80h104L340-396l56 56ZM200-40v-880h560v204h40v192h-40v484H200Z"/>
    </Icon>
  );
});

IconMaterialMobileArrowUpRightFilled.displayName = 'OnesyIconMaterialMobileArrowUpRightFilled';

export default IconMaterialMobileArrowUpRightFilled;
