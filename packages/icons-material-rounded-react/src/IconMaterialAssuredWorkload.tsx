import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssuredWorkload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkload'

      short_name='AssuredWorkload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-320v-200q0-17 11.5-28.5T240-560q17 0 28.5 11.5T280-520v200q0 17-11.5 28.5T240-280q-17 0-28.5-11.5T200-320Zm240 0v-200q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520v200q0 17-11.5 28.5T480-280q-17 0-28.5-11.5T440-320Zm400-320H116q-15 0-25.5-10.5T80-676v-22q0-11 5.5-19t14.5-13l344-172q17-8 36-8t36 8l342 171q11 5 16.5 15t5.5 21v15q0 17-11.5 28.5T840-640Zm-581-80h442L480-830 259-720ZM120-120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h402q17 0 28.5 11.5T562-160q0 17-11.5 28.5T522-120H120Zm600-330q-17 0-28.5-11.5T680-490v-30q0-17 11.5-28.5T720-560q17 0 28.5 11.5T760-520v30q0 17-11.5 28.5T720-450Zm-80 232v-77q0-11 5.5-21t16.5-15l120-60q8-5 18-5t18 5l120 60q11 5 16.5 15t5.5 21v77q0 75-39 129.5T815-6q-2 1-15 3-2 0-15-3-67-28-106-82.5T640-218Zm131 13-18-18q-9-9-21-8.5t-21 9.5q-9 9-9 21t9 21l32 32q12 12 28 12t28-12l90-89q9-9 9-21t-9-21q-9-9-21-8.5t-21 8.5l-76 74ZM259-720h442-442Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkload.displayName = 'OnesyIconMaterialAssuredWorkload';

export default IconMaterialAssuredWorkload;
