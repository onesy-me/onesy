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
      <path d="M260-440h100q17 0 28.5-11.5T400-480v-80q0-17-11.5-28.5T360-600H220q-8 0-14 6t-6 14v190q0 13 8.5 21.5T230-360q13 0 21.5-8.5T260-390v-50Zm220-160q-13 0-21.5 8.5T450-570v180q0 13 8.5 21.5T480-360q13 0 21.5-8.5T510-390v-180q0-13-8.5-21.5T480-600Zm130 100 95 130q3 5 8 7.5t11 2.5h12q10 0 17-7t7-17v-191q0-11-7-18t-18-7q-11 0-18 7t-7 18v115l-93-130q-4-5-9-7.5t-11-2.5h-12q-11 0-18 7t-7 18v190q0 11 7 18t18 7q11 0 18-7t7-18v-115Zm-350 0v-40h80v40h-80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/>
    </Icon>
  );
});

IconMaterialFiberPinFilled.displayName = 'OnesyIconMaterialFiberPinFilled';

export default IconMaterialFiberPinFilled;
