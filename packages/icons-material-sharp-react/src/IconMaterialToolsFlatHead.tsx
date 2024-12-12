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
      <path d="M320-120v-80h320v80H320Zm0-120-40-280 80-320h240l80 320-40 280H320Zm69-80h182l22-160H366l23 160Zm-17-240h216l-50-200H422l-50 200Zm199 240H389h182Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHead.displayName = 'OnesyIconMaterialToolsFlatHead';

export default IconMaterialToolsFlatHead;
