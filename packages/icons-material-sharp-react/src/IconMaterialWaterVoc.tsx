import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterVoc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterVoc'

      short_name='WaterVoc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-408q0-100 79.5-217.5T480-880q118 100 191.5 190T777-519h-87q-28-57-80-120.5T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160v80q-137 0-228.5-94T160-408Zm320-72ZM592-61l-17-38q-8-17-11.5-35.5T560-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-14-30 55-24 17 36q8 17 11.5 36t3.5 39q0 22-5 43t-15 41q-8 17-14 35t-6 37q0 14 3 27.5t9 26.5l15 33-55 24Zm120 0-17-38q-8-17-11.5-35.5T680-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-14-30 55-24 17 36q8 18 11.5 36.5T780-328q0 22-5 43t-15 41q-8 17-14 35t-6 37q0 14 3 27.5t9 26.5l15 33-55 24Zm120 0-17-38q-8-17-11.5-35.5T800-172q0-22 5-43.5t15-41.5q8-17 14-34.5t6-36.5q0-15-3.5-29t-9.5-28l-14-30 55-24 17 36q8 17 11.5 36t3.5 39q0 22-5 43.5T880-243q-8 17-14 34.5t-6 36.5q0 14 3 27.5t9 26.5l15 33-55 24Z"/>
    </Icon>
  );
});

IconMaterialWaterVoc.displayName = 'OnesyIconMaterialWaterVoc';

export default IconMaterialWaterVoc;
