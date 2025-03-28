import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesWearablesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesW100Filled'

      short_name='DevicesWearables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M670-240q61 0 103.5-42.5T816-386q0-61-42.5-103.5T670-532q-61 0-103.5 42.5T524-386q0 61 42.5 103.5T670-240ZM214-132q-24.75 0-42.37-17.63Q154-167.25 154-192v-576q0-24.75 17.63-42.38Q189.25-828 214-828h256q24.75 0 42.38 17.62Q530-792.75 530-768v142q0 5.53-4.04 9.26-4.03 3.74-10 3.74-5.96 0-9.96-4.03-4-4.02-4-9.97v-79H182v452h220q13 0 23.5 7t18.5 18q10 15 22.5 27.5T493-178q5 3.86 8 9.77t3 12.09q0 13.14-12.33 18.64T465-132H214Zm382-30v-66q-46-22-73-64.5T496-386q0-51 27-93.5t73-64.5v-66q0-12.75 8.51-21.38 8.51-8.62 21.09-8.62h88.82q12.58 0 21.08 8.62 8.5 8.63 8.5 21.38v66q46 22 73 64.5t27 93.5q0 51-27 93.5T744-228v66q0 12.75-8.51 21.37-8.51 8.63-21.09 8.63h-88.82q-12.58 0-21.08-8.63-8.5-8.62-8.5-21.37Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100Filled.displayName = 'OnesyIconMaterialDevicesWearablesW100Filled';

export default IconMaterialDevicesWearablesW100Filled;
