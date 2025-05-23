import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmpStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesW100Filled'

      short_name='AmpStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361.58-212q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37v-476q0-12.75 8.51-21.38 8.51-8.62 21.09-8.62h236.82q12.58 0 21.08 8.62 8.5 8.63 8.5 21.38v476q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63H361.58ZM204-306v-349q0-5 4.04-9 4.03-4 10-4 5.96 0 9.96 4.03 4 4.02 4 9.97v349q0 5-4.04 9-4.03 4-10 4-5.96 0-9.96-4.02-4-4.03-4-9.98Zm524 0v-349q0-5 4.04-9 4.03-4 10-4 5.96 0 9.96 4.03 4 4.02 4 9.97v349q0 5-4.04 9-4.03 4-10 4-5.96 0-9.96-4.02-4-4.03-4-9.98Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesW100Filled.displayName = 'OnesyIconMaterialAmpStoriesW100Filled';

export default IconMaterialAmpStoriesW100Filled;
