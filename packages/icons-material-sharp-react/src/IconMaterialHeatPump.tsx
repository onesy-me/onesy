import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPump = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPump'

      short_name='HeatPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm-30-83v-85l-60 60q14 9 28.5 15.5T450-323Zm60 0q16-3 31-9.5t29-15.5l-60-60v85Zm102-67q9-14 15.5-29t9.5-31h-85l60 60Zm-60-120h85q-3-16-9.5-31T612-570l-60 60Zm-42-42 60-60q-14-9-28.5-15.5T510-637v85Zm-30 112q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm-30-112v-85q-16 3-31 9.5T390-612l60 60Zm-127 42h85l-60-60q-9 14-15.5 29t-9.5 31Zm25 120 60-60h-85q3 16 9.5 31t15.5 29ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialHeatPump.displayName = 'OnesyIconMaterialHeatPump';

export default IconMaterialHeatPump;
