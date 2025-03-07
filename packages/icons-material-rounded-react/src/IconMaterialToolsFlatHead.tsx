import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsFlatHead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHead'

      short_name='ToolsFlatHead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-17 0-28.5-11.5T320-160q0-17 11.5-28.5T360-200h240q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H360Zm-5-120q-15 0-26.5-9.5T315-274l-33-230q-1-8-.5-15.5T284-535l68-275q3-14 14-22t25-8h178q14 0 25 8t14 22l68 275q2 8 2.5 15.5T678-504l-33 230q-2 15-13.5 24.5T605-240H355Zm34-80h182l22-160H366l23 160Zm-17-240h216l-50-200H422l-50 200Zm199 240H389h182Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHead.displayName = 'OnesyIconMaterialToolsFlatHead';

export default IconMaterialToolsFlatHead;
