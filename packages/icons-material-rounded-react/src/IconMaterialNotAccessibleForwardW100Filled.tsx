import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotAccessibleForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleForwardW100Filled'

      short_name='NotAccessibleForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 678-242h6v56q0 6-4 10t-10 4q-6 0-10-4t-4-10v-78l-65-65H440q-39 0-61.5-34t-5.5-70l36-78-273-273q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5ZM684-388l-53-53q17 8 31 22t22 31ZM538-534 419-653h88q32 0 48.5 22.5T557-575l-19 41ZM330-132q-66 0-112-47.5T172-293q0-66 47-113t112-47v29q-54 0-92.5 38.5T200-293q0 54 38.5 92.5T332-162q55 0 93.5-38.5T464-293h28q0 66-48 113.5T330-132Zm246-552q-25 0-42-17t-17-42q0-25 17-42t42-17q25 0 41.5 17t16.5 42q0 25-16.5 42T576-684Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleForwardW100Filled.displayName = 'OnesyIconMaterialNotAccessibleForwardW100Filled';

export default IconMaterialNotAccessibleForwardW100Filled;
