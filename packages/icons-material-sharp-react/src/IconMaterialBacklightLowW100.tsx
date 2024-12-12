import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightLowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightLowW100'

      short_name='BacklightLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M112-386v-28h88v28h-88Zm160-202-62-63 19-19 62 63-19 19Zm34 296v-68h348v68H306Zm160-388v-88h28v88h-28Zm220 91-19-20 63-61 19 20-63 61Zm74 203v-28h88v28h-88Z"/>
    </Icon>
  );
});

IconMaterialBacklightLowW100.displayName = 'OnesyIconMaterialBacklightLowW100';

export default IconMaterialBacklightLowW100;
