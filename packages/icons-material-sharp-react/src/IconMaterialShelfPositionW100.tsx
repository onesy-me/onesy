import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelfPositionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionW100'

      short_name='ShelfPosition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-146H200v146Zm440-174h120v-386H640v386Zm-440 0h120v-386H200v386Zm148 0h264v-386H348v386Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionW100.displayName = 'OnesyIconMaterialShelfPositionW100';

export default IconMaterialShelfPositionW100;
