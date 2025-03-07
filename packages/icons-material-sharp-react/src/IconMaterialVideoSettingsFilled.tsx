import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoSettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoSettingsFilled'

      short_name='VideoSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v280h-80v-200H160v480h320v80H80Zm300-140v-360l280 180-280 180ZM714-40l-12-60q-12-5-22.5-10.5T658-124l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T702-380l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T806-100l-12 60h-80Zm40-120q33 0 56.5-23.5T834-240q0-33-23.5-56.5T754-320q-33 0-56.5 23.5T674-240q0 33 23.5 56.5T754-160Z"/>
    </Icon>
  );
});

IconMaterialVideoSettingsFilled.displayName = 'OnesyIconMaterialVideoSettingsFilled';

export default IconMaterialVideoSettingsFilled;
