import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialComicBubbleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComicBubbleW100Filled'

      short_name='ComicBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M724-236q-7 7-15.5 9t-18.5-3l-144-74-85 85q-9 9-21 9t-21-9l-73.47-73H242q-12.75 0-21.37-8.63Q212-309.25 212-322v-103.53L139-499q-9-9-9-21t9-21l73-73.47V-718q0-12.75 8.63-21.38Q229.25-748 242-748h103.53L419-821q9-9 21-9t21 9l73.47 73H638q12.75 0 21.38 8.62Q668-730.75 668-718v103.53L741-541q9 9 9 21t-9 21l-85 85 74 144q5 10 3 18.5t-9 15.5Z"/>
    </Icon>
  );
});

IconMaterialComicBubbleW100Filled.displayName = 'OnesyIconMaterialComicBubbleW100Filled';

export default IconMaterialComicBubbleW100Filled;
