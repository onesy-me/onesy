import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanguageFrenchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageFrenchFilled'

      short_name='LanguageFrench'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-400h280v80H240v80h160v80H240v160h-80Zm360 0v-400h240l40 40v160l-40 40h-34l74 160h-84l-75-160h-41v160h-80Zm80-240h120v-80H600v80Z"/>
    </Icon>
  );
});

IconMaterialLanguageFrenchFilled.displayName = 'OnesyIconMaterialLanguageFrenchFilled';

export default IconMaterialLanguageFrenchFilled;
