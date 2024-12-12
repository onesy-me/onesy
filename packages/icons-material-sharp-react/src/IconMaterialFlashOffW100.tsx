import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffW100'

      short_name='FlashOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-828h259l-63 217h155l-98 143-20-20 65-95H511l63-217H380v107l-28-28v-107Zm100 584v-208H352v-116L126-794l20-20 668 668-20 20-251-251-91 133Zm30-347Z"/>
    </Icon>
  );
});

IconMaterialFlashOffW100.displayName = 'OnesyIconMaterialFlashOffW100';

export default IconMaterialFlashOffW100;
