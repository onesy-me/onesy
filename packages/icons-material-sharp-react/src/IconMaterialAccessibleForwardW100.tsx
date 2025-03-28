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
      <path d="M330-132q-66 0-112-47.5T172-293q0-66 47-113t112-47v29q-54 0-92.5 38.5T200-293q0 54 38.5 92.5T332-162q55 0 93.5-38.5T464-293h28q0 66-48 113.5T330-132Zm326-40v-157H372l-27-42 112-246H353l-29 77-26-10 37-103h172q32 0 48.5 22.5T557-575l-95 205h222v198h-28Zm-80-512q-25 0-42-17t-17-42q0-25 17-42t42-17q25 0 41.5 17t16.5 42q0 25-16.5 42T576-684Z"/>
    </Icon>
  );
});

IconMaterialAccessibleForwardW100.displayName = 'OnesyIconMaterialAccessibleForwardW100';

export default IconMaterialAccessibleForwardW100;
