import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileText2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileText2W100'

      short_name='MobileText2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-501h284v-28H340v28Zm40 108h204v-28H380v28ZM252-92v-776h460v190h36v134h-36v452H252Zm28-28h404v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileText2W100.displayName = 'OnesyIconMaterialMobileText2W100';

export default IconMaterialMobileText2W100;
