import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbIridescentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIridescentW100'

      short_name='WbIridescent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-408v-144h456v144H252Zm214-360v-88h28v88h-28Zm262 102-20-20 56-56 20 20-56 56ZM466-108v-88h28v88h-28Zm298-110-56-56 20-20 56 56-20 20ZM232-666l-56-56 20-20 56 56-20 20Zm-36 448-20-20 56-56 20 20-56 56Zm84-218h400v-88H280v88Zm0 0v-88 88Z"/>
    </Icon>
  );
});

IconMaterialWbIridescentW100.displayName = 'OnesyIconMaterialWbIridescentW100';

export default IconMaterialWbIridescentW100;
