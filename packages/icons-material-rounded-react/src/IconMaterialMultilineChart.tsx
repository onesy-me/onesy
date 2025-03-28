import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMultilineChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChart'

      short_name='MultilineChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-298q0 17-11.5 28.5T800-258q-17 0-28.5-11.5T760-298q-6-50-20.5-95.5T702-480L600-365q-23 26-57 27t-59-23L380-464 165-249q-12 12-28.5 11.5T108-250q-11-12-11.5-28t11.5-28l215-215q23-23 57-23t57 23l103 103 116-130q-51-60-120-95t-152-35q-71 0-134 26.5T136-580q-6 5-13 8t-15 3q-17 0-28.5-11.5T68-609q0-8 3-16t9-13q61-55 139-87.5T384-758q98 0 181 39.5T710-608l85-97q11-14 29-14.5t30 12.5q11 11 11.5 27T855-652l-95 108q29 47 54.5 119T840-298Z"/>
    </Icon>
  );
});

IconMaterialMultilineChart.displayName = 'OnesyIconMaterialMultilineChart';

export default IconMaterialMultilineChart;
