import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalAlignCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterW100Filled'

      short_name='VerticalAlignCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-352-80 80q-4 4-9.5 4.5T366-272q-5-5-5-10t5-10l92.65-92.65Q464-390 469.13-392q5.14-2 11-2 5.87 0 10.87 2 5 2 10.35 7.35L594-292q4 4 4.5 9.5T594-272q-5 5-10 5t-10-5l-80-80v206q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-206ZM226-466q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h508q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H226Zm240-142v-206q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v206l80-80q4-4 9.5-4.5T594-688q5 5 5 10t-5 10l-92.65 92.65Q496-570 490.87-568q-5.14 2-11 2-5.87 0-10.87-2-5-2-10.35-7.35L366-668q-4-4-4.5-9.5T366-688q5-5 10-5t10 5l80 80Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterW100Filled.displayName = 'OnesyIconMaterialVerticalAlignCenterW100Filled';

export default IconMaterialVerticalAlignCenterW100Filled;
