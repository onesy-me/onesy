import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAccessibleForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleForwardW100'

      short_name='AccessibleForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-132q-66 0-112-47.5T172-293q0-62 42-108t104-51q6-1 10.5 3t5.5 10q1 6-3 10t-10 5q-51 4-86 42t-35 89q0 54 38.5 92.5T332-162q48 0 84.5-30t45.5-76q2-6 6-9.5t10-1.5q6 2 9.5 6.5T489-262q-11 56-56.5 93T330-132Zm246-552q-25 0-42-17t-17-42q0-25 17-42t42-17q25 0 41.5 17t16.5 42q0 25-16.5 42T576-684ZM440-329q-39 0-61.5-34t-5.5-70l84-184H353l-24 64q-2 5-7.5 7.5t-10.5.5q-5-2-7.5-7.5T303-563l21-59q6-16 16.5-23.5T368-653h139q32 0 48.5 22.5T557-575l-95 205h170q22 0 37 15.5t15 37.5v131q0 6-4 10t-10 4q-6 0-10-4t-4-10v-121q0-10-5.5-16t-16.5-6H440Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForwardW100.displayName = 'OnesyIconMaterialAccessibleForwardW100';

export default IconMaterialAccessibleForwardW100;
