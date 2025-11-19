import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAndroidCellDual5BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AndroidCellDual5BarFilled'

      short_name='AndroidCellDual5Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-400v-180h120v180H40Zm190 0v-240h120v240H230Zm190 0v-280h120v280H420Zm190 0v-320h120v320H610Zm190 0v-400h120v400H800ZM40-160v-160h120v160H40Zm190 0v-160h120v160H230Zm190 0v-160h120v160H420Zm190 0v-160h120v160H610Zm190 0v-160h120v160H800Z"/>
    </Icon>
  );
});

IconMaterialAndroidCellDual5BarFilled.displayName = 'OnesyIconMaterialAndroidCellDual5BarFilled';

export default IconMaterialAndroidCellDual5BarFilled;
