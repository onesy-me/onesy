import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCellDual4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCellDual4BarFilled'

      short_name='AndroidCellDual4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M60-400v-180h120v180H60Zm240 0v-240h120v240H300Zm240 0v-320h120v320H540Zm240 0v-400h120v400H780ZM60-160v-160h120v160H60Zm240 0v-160h120v160H300Zm240 0v-160h120v160H540Zm240 0v-160h120v160H780Z"/>
    </Icon>
  );
});

IconMaterialAndroidCellDual4BarFilled.displayName = 'OnesyIconMaterialAndroidCellDual4BarFilled';

export default IconMaterialAndroidCellDual4BarFilled;
