import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPerformanceMax = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PerformanceMax'

      short_name='PerformanceMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm240-186 118 118q12 12 28 12t28-12l158-158q11-11 11-27.5T732-522q-12-12-28.5-12T675-522L546-393 428-511q-12-12-28-12t-28 12L228-367q-11 11-11 27.5t11 28.5q12 12 28.5 12t28.5-12l115-115Zm122-136 19 42q3 6 9 6t9-6l19-42 42-19q6-3 6-9t-6-9l-42-19-19-42q-3-6-9-6t-9 6l-19 42-42 19q-6 3-6 9t6 9l42 19Z"/>
    </Icon>
  );
});

IconMaterialPerformanceMax.displayName = 'OnesyIconMaterialPerformanceMax';

export default IconMaterialPerformanceMax;
