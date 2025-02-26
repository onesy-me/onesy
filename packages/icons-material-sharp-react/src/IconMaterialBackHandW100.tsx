import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandW100'

      short_name='BackHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-92q-76 0-142-37T252-232L112-465l27-27 193 126v-396h28v449L154-450l122 202q35 60 95.04 94 60.03 34 128.96 34 107.98 0 183.99-75T760-379v-369h28v369q0 119.87-83.85 203.44Q620.29-92 500-92Zm-25-414v-336h28v336h-28Zm143 0v-296h28v296h-28ZM457-313Z"/>
    </Icon>
  );
});

IconMaterialBackHandW100.displayName = 'OnesyIconMaterialBackHandW100';

export default IconMaterialBackHandW100;
