import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwordsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordsFilled'

      short_name='Swords'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM278-526 80-724v-160h160l198 198-160 160Z"/>
    </Icon>
  );
});

IconMaterialSwordsFilled.displayName = 'OnesyIconMaterialSwordsFilled';

export default IconMaterialSwordsFilled;
