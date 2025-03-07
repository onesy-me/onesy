import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBakeryDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningW100'

      short_name='BakeryDining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-266Zm311 8 68-74-82-154-74 182 88 46Zm-216-36h94l119-293-181-72-32 365Zm-286 0h94l-32-365-178 71 116 294Zm-122 36 88-46-72-182-84 158 68 70Zm244-36h136l36-412H376l36 412Zm-250 70-95-98 103-198-33-84 213-83-4-47h268l-4 46 215 87-33 79 102 194-96 105-82-43H244l-82 42Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningW100.displayName = 'OnesyIconMaterialBakeryDiningW100';

export default IconMaterialBakeryDiningW100;
