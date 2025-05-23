import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberDvr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvr'

      short_name='FiberDvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-360h120q26 0 43-17t17-43v-120q0-26-17-43t-43-17H180q-8 0-14 6t-6 14v200q0 8 6 14t14 6Zm40-60v-120h80v120h-80Zm254-42-34-117q-3-9-10.5-15t-17.5-6q-14 0-22.5 11.5T385-563l53 182q3 9 10.5 15t17.5 6h16q10 0 17.5-6t10.5-15l53-182q4-14-4.5-25.5T536-600q-10 0-17.5 6T508-579l-34 117Zm186 22h46l27 63q3 8 10 12.5t15 4.5q15 0 23.5-12t2.5-26l-20-46q15-8 25.5-23t10.5-33v-40q0-26-17-43t-43-17H620q-8 0-14 6t-6 14v190q0 13 8.5 21.5T630-360q13 0 21.5-8.5T660-390v-50Zm0-60v-40h80v40h-80ZM120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm0-80h720v-480H120v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFiberDvr.displayName = 'OnesyIconMaterialFiberDvr';

export default IconMaterialFiberDvr;
