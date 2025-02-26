import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIntegrationInstructions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IntegrationInstructions'

      short_name='IntegrationInstructions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m354-480 58-58q12-12 11.5-28T412-594q-12-12-28.5-12.5T355-595l-87 87q-12 12-12 28t12 28l87 87q12 12 28.5 11.5T412-366q11-12 11.5-28T412-422l-58-58Zm252 0-58 58q-12 12-11.5 28t11.5 28q12 12 28.5 12.5T605-365l87-87q12-12 12-28t-12-28l-87-87q-12-12-28.5-11.5T548-594q-11 12-11.5 28t11.5 28l58 58ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm280-590q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/>
    </Icon>
  );
});

IconMaterialIntegrationInstructions.displayName = 'OnesyIconMaterialIntegrationInstructions';

export default IconMaterialIntegrationInstructions;
