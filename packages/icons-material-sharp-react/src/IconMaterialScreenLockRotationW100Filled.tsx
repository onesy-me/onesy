import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockRotationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockRotationW100Filled'

      short_name='ScreenLockRotation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M669-776h80v-40q0-17-11.5-28.5T709-856q-17 0-28.5 11.5T669-816v40ZM516-86q-88.16 0-166.08-33.5Q272-153 213.5-211.5q-58.5-58.5-92-136.42Q88-425.84 88-514h28q0 82 31.5 155t86 127.5Q288-177 361-145.5T516-114L368-262l20-20L578-92q-18 3-33 4.5T516-86Zm81-149L235-597l198-198 67 67v228h228l67 67-198 198Zm3-365v-176h41v-40q0-29 19.5-48.5T709-884q29 0 48.5 19.5T777-816v40h39v176H600Z"/>
    </Icon>
  );
});

IconMaterialScreenLockRotationW100Filled.displayName = 'OnesyIconMaterialScreenLockRotationW100Filled';

export default IconMaterialScreenLockRotationW100Filled;
