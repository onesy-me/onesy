import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNaturePeopleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NaturePeopleFilled'

      short_name='NaturePeople'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M180-520q-26 0-43-17t-17-43q0-26 17-43t43-17q26 0 43 17t17 43q0 26-17 43t-43 17ZM120-80v-200H80v-200h200v200h-40v120h320v-200h-70q-71 0-120.5-49.5T320-530q0-53 28.5-94.5T422-686q11-65 60.5-109.5T600-840q68 0 117.5 44.5T778-686q45 20 73.5 61.5T880-530q0 71-49.5 120.5T710-360h-70v200h200v80H120Z"/>
    </Icon>
  );
});

IconMaterialNaturePeopleFilled.displayName = 'OnesyIconMaterialNaturePeopleFilled';

export default IconMaterialNaturePeopleFilled;
