import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeDualW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeDualW100'

      short_name='ModeDual'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-330q0 35 18 70.5t56 73.5l-20 19q-42-42-62-82t-20-81q0-35 11-74t34-88q25-52 34.5-84t9.5-61q0-33-19-66.5T161-773l19-20q45 38 67 77t22 79q0 32-10 66.5T224-484q-23 50-33.5 86T180-330Zm151 0q0 35 18 70t56 73l-20 19q-42-42-62-81.5T303-330q0-35 11-74t34-88q25-52 34.5-84.5T392-638q0-33-19-66t-61-69l19-21q45 38 67 77t22 79q0 32-10 67t-35 87q-23 50-33.5 86T331-330Zm169 224v-748h28v202l156-154 20 20-176 176v116h116l176-176 19 19-153 157h202v28H686l154 156-20 20-176-176H528v116l176 176-19 19-157-153v202h-28Z"/>
    </Icon>
  );
});

IconMaterialModeDualW100.displayName = 'OnesyIconMaterialModeDualW100';

export default IconMaterialModeDualW100;
