import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHealthMetricsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100'

      short_name='HealthMetrics'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M392-140q-25 0-42.5-17.5T332-200v-132H200q-25 0-42.5-17.5T140-392v-176q0-25 17.5-42.5T200-628h132v-132q0-25 17.5-42.5T392-820h176q25 0 42.5 17.5T628-760v132h132q25 0 42.5 17.5T820-568v176q0 25-17.5 42.5T760-332H628v132q0 25-17.5 42.5T568-140H392ZM168-494h192q4 0 6.5 1.5t4.5 4.5l65 97 71-213q2-5 5-7.5t8-2.5q4 0 7 1.5t5 4.5l75 114h185v-74q0-14-9-23t-23-9H630q-13 0-21.5-8.5T600-630v-130q0-14-9-23t-23-9H392q-14 0-23 9t-9 23v130q0 13-8.5 21.5T330-600H200q-14 0-23 9t-9 23v74Zm0 28v74q0 14 9 23t23 9h130q13 0 21.5 8.5T360-330v130q0 14 9 23t23 9h176q14 0 23-9t9-23v-130q0-13 8.5-21.5T630-360h130q14 0 23-9t9-23v-74H600q-4 0-7-2t-5-5l-64-96-71 213q-2 5-5.5 7.5T439-346q-4 0-6.5-1.5T428-352l-76-114H168Zm312-14Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100.displayName = 'OnesyIconMaterialHealthMetricsW100';

export default IconMaterialHealthMetricsW100;
