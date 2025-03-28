import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHome'

      short_name='AddHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-300v80q0 8 6 14t14 6q8 0 14-6t6-14v-80h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h80Zm20 180q-83 0-141.5-58.5T520-320q0-83 58.5-141.5T720-520q83 0 141.5 58.5T920-320q0 83-58.5 141.5T720-120ZM160-280v-360q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l242 182q7 5 10.5 13t3.5 17q0 17-11.5 28.5T744-632q-7 0-13-2t-11-6L480-820 240-640v360h160q17 0 28.5 11.5T440-240q0 17-11.5 28.5T400-200H240q-33 0-56.5-23.5T160-280Zm320-270Z"/>
    </Icon>
  );
});

IconMaterialAddHome.displayName = 'OnesyIconMaterialAddHome';

export default IconMaterialAddHome;
