import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutpatient = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Outpatient'

      short_name='Outpatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120q-17 0-28.5-11.5T40-160v-640q0-17 11.5-28.5T80-840h480q17 0 28.5 11.5T600-800v640q0 17-11.5 28.5T560-120H360v-160h-80v160H80Zm40-80h80v-160h240v160h80v-560H120v560Zm80-240h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80ZM200-200v-160h240v160-160H200v160Zm440-280q0-17 11.5-28.5T680-520h87l-16-16q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l84 84q12 12 12 28t-12 28l-84 84q-11 11-27.5 11.5T752-368q-11-11-11.5-27.5T751-424l16-16h-87q-17 0-28.5-11.5T640-480Z"/>
    </Icon>
  );
});

IconMaterialOutpatient.displayName = 'OnesyIconMaterialOutpatient';

export default IconMaterialOutpatient;
