import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandContentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandContentFilled'

      short_name='ExpandContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280h120q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200H240q-17 0-28.5-11.5T200-240v-160q0-17 11.5-28.5T240-440q17 0 28.5 11.5T280-400v120Zm400-400H560q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760h160q17 0 28.5 11.5T760-720v160q0 17-11.5 28.5T720-520q-17 0-28.5-11.5T680-560v-120Z"/>
    </Icon>
  );
});

IconMaterialExpandContentFilled.displayName = 'OnesyIconMaterialExpandContentFilled';

export default IconMaterialExpandContentFilled;
