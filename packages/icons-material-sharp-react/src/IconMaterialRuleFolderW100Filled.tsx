import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRuleFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderW100Filled'

      short_name='RuleFolder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm181-130 161-161-20-20-141 141-56-56-20 20 76 76Zm263 0 64-64 64 64 19-19-64-64 64-64-19-19-64 64-64-64-19 19 64 64-64 64 19 19Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderW100Filled.displayName = 'OnesyIconMaterialRuleFolderW100Filled';

export default IconMaterialRuleFolderW100Filled;
