import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextCompareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextCompareW100Filled'

      short_name='TextCompare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-80v-92H172v-616h280v-92h28v800h-28Zm118-680v-28h228v616H570v-28h200v-560H570Zm0 294v-28h146v28H570Zm0-134v-28h146v28H570ZM306-332h146v-28H306v28Zm0-134h146v-28H306v28Zm0-134h146v-28H306v28Z"/>
    </Icon>
  );
});

IconMaterialTextCompareW100Filled.displayName = 'OnesyIconMaterialTextCompareW100Filled';

export default IconMaterialTextCompareW100Filled;
