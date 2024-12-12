import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberPinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinFilled'

      short_name='FiberPin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-360h60v-80h140v-160H200v240Zm250 0h60v-240h-60v240Zm110 0h50v-140l102 140h48v-240h-50v140L610-600h-50v240ZM260-500v-40h80v40h-80ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialFiberPinFilled.displayName = 'OnesyIconMaterialFiberPinFilled';

export default IconMaterialFiberPinFilled;
