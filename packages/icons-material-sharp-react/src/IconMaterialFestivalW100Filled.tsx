import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFestivalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FestivalW100Filled'

      short_name='Festival'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M116-106q23-74 30.5-149.5T156-408q-39-11-64.5-46.5T66-546v-36q109-36 222-109t192-157q79 84 192 157t222 109v36q0 56-25.5 91.5T804-408q2 77 9.5 152.5T844-106H116Zm8-468h712q-98-40-187-99.5T480-808q-80 75-169 134.5T124-574Zm456 140q40 0 63-34t23-78H494q0 44 23 78t63 34Zm-200 0q40 0 63-34t23-78H294q0 44 23 78t63 34Zm-200 0q40 0 63-34t23-78H94q0 44 23 78t63 34Zm-28 300h164q11-70 16.5-139.5T340-414q-18-8-33.5-22.5T280-474q-14 30-39 48t-57 20q-2 69-8 137t-24 135Zm192 0h272q-11-68-16.5-135.5T592-406q-36 3-67-16.5T480-478q-14 36-45 55.5T368-406q-2 69-7.5 136.5T344-134Zm300 0h164q-18-67-24-135t-8-137q-32-2-58-20t-38-50q-9 24-25.5 39T620-414q2 71 7.5 140.5T644-134Zm136-300q40 0 63-34t23-78H694q0 44 23 78t63 34Z"/>
    </Icon>
  );
});

IconMaterialFestivalW100Filled.displayName = 'OnesyIconMaterialFestivalW100Filled';

export default IconMaterialFestivalW100Filled;
