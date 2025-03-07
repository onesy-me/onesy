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
      <path d="M670-240q61 0 103.5-42.5T816-386q0-61-42.5-103.5T670-532q-61 0-103.5 42.5T524-386q0 61 42.5 103.5T670-240ZM154-132v-696h376v206q-8 5-14.5 9.5T502-603v-103H182v452h248q14 29 37 52t49 42v28H154Zm442 0v-96q-46-22-73-64.5T496-386q0-51 27-93.5t73-64.5v-96h148v96q46 22 73 64.5t27 93.5q0 51-27 93.5T744-228v96H596Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100Filled.displayName = 'OnesyIconMaterialDevicesWearablesW100Filled';

export default IconMaterialDevicesWearablesW100Filled;
