import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperGuideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuideW100Filled'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm334-588v234l74-44 74 44v-234H506Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuideW100Filled.displayName = 'OnesyIconMaterialDeveloperGuideW100Filled';

export default IconMaterialDeveloperGuideW100Filled;
