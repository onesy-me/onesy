import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperGuide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuide'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v245q0 12-10 17.5t-20-.5l-49-30q-10-6-21-6t-21 6l-49 30q-10 6-20 .5T480-515v-245H200Zm0 560v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuide.displayName = 'OnesyIconMaterialDeveloperGuide';

export default IconMaterialDeveloperGuide;
