import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWebStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesW100Filled'

      short_name='WebStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M686-181v-599h48v599h-48Zm-496 61v-720h468v720H190Zm572-121v-479h28v479h-28Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesW100Filled.displayName = 'OnesyIconMaterialWebStoriesW100Filled';

export default IconMaterialWebStoriesW100Filled;
