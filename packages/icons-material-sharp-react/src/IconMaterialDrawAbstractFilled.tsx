import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawAbstractFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawAbstractFilled'

      short_name='DrawAbstract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-309q-17 17-42 22.5t-58 .5q-8-2-15-3.5t-12 3.5q-6 6-4 14.5t2 16.5q7 33 2 57t-22 41q-18 19-43.5 24.5t-56.5.5q-21-4-31 2t-27 25l-56-53q32-33 48-44.5t43-11.5q28 0 42 5t22-2q6-5 4-14t-4-17q-3-35 2-59.5t21-40.5q16-17 41.5-22.5t57.5-.5q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-5-35 0-59.5t21-40.5q16-17 41.5-22.5t57.5-.5q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-5-34 .5-58.5T536-650q16-17 40.5-23t51.5-1q13 2 21.5 4.5T663-672q6-6 4-15t-4-17q-7-33-2-57t22-41q18-19 43-24.5t56-.5q21 4 31.5-2t27.5-25l55 53q-32 33-48 44.5T805-745q-28 0-42-5t-22 2q-6 5-3.5 14t4.5 17q5 34-.5 58.5T720-617q-16 17-40.5 23.5T629-592q-14-3-22-5.5t-13 2.5q-6 6-4.5 15t3.5 17q5 35 0 59.5T572-463q-17 17-42 23t-52 1q-11-2-19-4t-13 3q-6 6-4.5 14.5T445-409q5 35-.5 59.5T424-309ZM240-520q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM560-40v-360h360v360H560Z"/>
    </Icon>
  );
});

IconMaterialDrawAbstractFilled.displayName = 'OnesyIconMaterialDrawAbstractFilled';

export default IconMaterialDrawAbstractFilled;
