import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesW100Filled'

      short_name='AutoStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-226q-49-32-104-49t-114-17q-44 0-86 10t-82 28v-454q39-20 81.5-30t86.5-10q59 0 114 19t106 49v420q49-32 105-46t115-14q36 0 71 6t69 19v-427q8 3 15 6t13 8v454q-40-18-82-28t-86-10q-60 0-117 15.5T478-226Zm82-134v-328l200-200v348L560-360Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesW100Filled.displayName = 'OnesyIconMaterialAutoStoriesW100Filled';

export default IconMaterialAutoStoriesW100Filled;
