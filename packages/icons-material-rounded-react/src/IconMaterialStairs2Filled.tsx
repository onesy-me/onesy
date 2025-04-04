import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStairs2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs2Filled'

      short_name='Stairs2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h200v-200q0-17 11.5-28.5T360-520h200v-200q0-17 11.5-28.5T600-760h240q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680H640v200q0 17-11.5 28.5T600-440H400v200q0 17-11.5 28.5T360-200H120Z"/>
    </Icon>
  );
});

IconMaterialStairs2Filled.displayName = 'OnesyIconMaterialStairs2Filled';

export default IconMaterialStairs2Filled;
