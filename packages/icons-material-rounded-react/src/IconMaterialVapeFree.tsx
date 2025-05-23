import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVapeFree = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VapeFree'

      short_name='VapeFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M84-819q12-12 28.5-12t28.5 12l706 707-56 56-144-144H320v-120h207L84-763q-11-11-11-27.5T84-819Zm196 499v120q-39-10-79.5-15t-80.5-5q-17 0-28.5-11.5T80-260q0-16 14.5-22.5T120-300q40 0 80.5-5t79.5-15Zm473 0h67q25 0 42.5 17.5T880-260q0 14-5.5 25.5T859-215L753-320Zm-333 40q-8 0-14 6t-6 14q0 8 6 14t14 6q8 0 14-6t6-14q0-8-6-14t-14-6Zm160-482q13 0 21.5 8.5T610-732q0 13-8.5 21.5T580-702q-31 0-52.5 19.5T506-632q0 31 21.5 55.5T580-552h61q57 0 98 36t41 90v66h-60v-52q0-39-23.5-60.5T641-494h-62L446-627v-1q0-56 39-95t95-39Zm80-118q56 0 95 39t39 95q0 28-10.5 52.5T754-651q57 27 91.5 80.5T880-450v90h-60v-89q0-68-46-115.5T660-612q-13 0-21.5-8.5T630-642q0-13 8.5-21.5T660-672q31 0 52.5-21.5T734-746q0-31-21.5-52.5T660-820q-13 0-21.5-8.5T630-850q0-13 8.5-21.5T660-880Z"/>
    </Icon>
  );
});

IconMaterialVapeFree.displayName = 'OnesyIconMaterialVapeFree';

export default IconMaterialVapeFree;
