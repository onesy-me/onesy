import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowWarmUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowWarmUp'

      short_name='ArrowWarmUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q-17 0-28.5-11.5T440-480v-247L284-572q-11 11-27.5 11.5T228-572q-11-11-11-28t11-28l224-224q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l224 224q11 11 11 27.5T732-572q-12 12-28.5 12T675-572L520-727v247q0 17-11.5 28.5T480-440Zm0 200q-17 0-28.5-11.5T440-280v-40q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320v40q0 17-11.5 28.5T480-240Zm0 160q-17 0-28.5-11.5T440-120q0-17 11.5-28.5T480-160q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialArrowWarmUp.displayName = 'OnesyIconMaterialArrowWarmUp';

export default IconMaterialArrowWarmUp;
