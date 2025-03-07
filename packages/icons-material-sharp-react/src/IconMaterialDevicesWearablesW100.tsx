import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDevicesWearablesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesW100'

      short_name='DevicesWearables'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M182-734h320v-66H182v66Zm-28 602v-696h376v206q-8 5-14.5 9.5T502-603v-103H182v452h248q4 8 8.5 14.5T448-226H182v66h334v28H154Zm516-108q61 0 103.5-42.5T816-386q0-61-42.5-103.5T670-532q-61 0-103.5 42.5T524-386q0 61 42.5 103.5T670-240Zm-74 108v-96q-45-21-72.5-63.22t-27.5-95Q496-439 523.5-481t72.5-63v-96h148v96q45 21 72.5 63.22t27.5 95Q844-333 816.5-291T744-228v96H596Zm-414-94v66-66Zm0-508v-66 66Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100.displayName = 'OnesyIconMaterialDevicesWearablesW100';

export default IconMaterialDevicesWearablesW100;
