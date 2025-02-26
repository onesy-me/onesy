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
      <path d="M332-212v-536h296v536H332Zm-128-80v-376h28v376h-28Zm524 0v-376h28v376h-28Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesW100Filled.displayName = 'OnesyIconMaterialAmpStoriesW100Filled';

export default IconMaterialAmpStoriesW100Filled;
