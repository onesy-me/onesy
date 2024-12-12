import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayFilled'

      short_name='AutoReadPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m447-431 156-104q14-9 14-25t-14-25L447-689q-15-10-31-1.5T400-664v208q0 18 16 26.5t31-1.5ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayFilled.displayName = 'OnesyIconMaterialAutoReadPlayFilled';

export default IconMaterialAutoReadPlayFilled;
