import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUniversalLocalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalLocalFilled'

      short_name='UniversalLocal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-320q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480Zm0-200q-63 0-111.5 44.5T320-516q0 45 34 99t100 114q6 5 12.5 7.5T480-293q7 0 13.5-2.5T506-303q66-60 100-114t34-99q0-75-48.5-119.5T480-680Z"/>
    </Icon>
  );
});

IconMaterialUniversalLocalFilled.displayName = 'OnesyIconMaterialUniversalLocalFilled';

export default IconMaterialUniversalLocalFilled;
