import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccountCircleOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOff'

      short_name='AccountCircleOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-424Zm56 264q51 0 98-15.5t88-44.5q-41-29-88-44.5T480-280q-51 0-98 15.5T294-220q41 29 88 44.5t98 15.5Zm99-519q31 31 39 74t-10 83q-8 17-23.5 23.5T553-500q-15-7-21-22.5t2-30.5q8-17 5-36t-17-33q-13-13-30.5-16.5T457-635q-14 5-28-1.5T410-659q-6-17 2.5-32.5T438-714q35-14 73.5-4t67.5 39ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 16.5-115T145-701l-90-91q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 11.5 28.5T847-56q-12 12-28 12t-28-12L204-642q-22 37-33 78t-11 84q0 57 19 109t55 95q54-41 116.5-62.5T480-360q38 0 76 8t74 22l133 133q-57 57-130 87T480-80Zm79-479ZM314-844q39-18 81-27t85-9q80 0 153 30t130 87q57 57 87 130t30 153q0 43-9 85t-27 81q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-62t6.5-64q0-134-93-227t-227-93q-32 0-64 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOff.displayName = 'OnesyIconMaterialAccountCircleOff';

export default IconMaterialAccountCircleOff;
