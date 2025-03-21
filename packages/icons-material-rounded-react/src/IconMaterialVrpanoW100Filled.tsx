import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVrpanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoW100Filled'

      short_name='Vrpano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m444-415-57-68q-2-3-12-5-3 0-6.5 1t-5.5 4l-68 84q-6 8-2 16.5t14 7.5q43-4 86-5.5t87-1.5q42 0 83 2t83 5q11 1 20-6t-1-18l-94-113q-1-2-11-6-3 0-6.5 1.5T548-512l-81 97q-1 2-12 6-3 0-6-1.5t-5-4.5ZM170-228q-15 5-26.5-1.5T132-254v-450q0-18 11.5-24.5T170-730q23 7 55 14.5t71 13.5q39 6 85 10t99 4q53 0 98.5-4t84.5-10q39-6 70.5-13.5T788-730q15-5 27.5 1.5T828-704v450q0 18-12.5 24.5T788-228q-23-7-54.5-14.5T663-257q-39-7-84.5-11t-98.5-4q-53 0-99 4t-85 11q-39 7-71 14.5T170-228Z"/>
    </Icon>
  );
});

IconMaterialVrpanoW100Filled.displayName = 'OnesyIconMaterialVrpanoW100Filled';

export default IconMaterialVrpanoW100Filled;
