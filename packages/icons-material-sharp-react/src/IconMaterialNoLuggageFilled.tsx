import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoLuggageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoLuggageFilled'

      short_name='NoLuggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-40h-80v-527L27-820l57-57L876-85l-57 57-101-101v9h-38v40h-80v-40H360v40h-80Zm80-160h80v-167l-80-80v247Zm160 0h80v-7l-80-80v87Zm240-75L600-475v-125h-80v45L360-715v-165h240v160h160v405ZM440-720h80v-80h-80v80Z"/>
    </Icon>
  );
});

IconMaterialNoLuggageFilled.displayName = 'OnesyIconMaterialNoLuggageFilled';

export default IconMaterialNoLuggageFilled;
