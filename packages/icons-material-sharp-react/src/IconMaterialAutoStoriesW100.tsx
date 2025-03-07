import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoStoriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesW100'

      short_name='AutoStories'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-226q-49-32-104-49t-114-17q-44 0-86 10t-82 28v-454q39-20 81.5-30t86.5-10q59 0 114 19t106 49v420q49-32 105-46t115-14q36 0 71 6t69 19v-427q8 3 15 6t13 8v454q-40-18-82-28t-86-10q-60 0-117 15.5T478-226Zm82-134v-328l200-200v348L560-360Zm-108 87v-391q-45-25-93-40.5T260-720q-36 0-72 6.5T120-690v395q34-11 69-18t71-7q51 0 99.5 10.5T452-273Zm0 0v-391 391Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesW100.displayName = 'OnesyIconMaterialAutoStoriesW100';

export default IconMaterialAutoStoriesW100;
