import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChessW100'

      short_name='Chess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-200h480v-77H240v77Zm100-105h280l-29-201H369l-29 201ZM212-172v-133h100l29-201h-89v-28h456v28h-89l29 201h100v133H212Zm128-362-56-254q27 16 48.56 22.5Q354.13-759 380-759q31 0 56-8t44-22q19 14 44.05 22 25.04 8 54.95 8 23 0 43.5-6t54.5-23l-57 254h-29l47-208q-15 5-30.5 8t-32.5 3q-25.37 0-49.69-6Q501-743 480-755q-21 12-45.63 18-24.63 6-50.37 6-16 0-31-2t-30-7l46 206h-29Zm140 28Zm1-28Zm-1 334Z"/>
    </Icon>
  );
});

IconMaterialChessW100.displayName = 'OnesyIconMaterialChessW100';

export default IconMaterialChessW100;
