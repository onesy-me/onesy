import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSurgicalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurgicalFilled'

      short_name='Surgical'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-120H500q-20 0-30-12.5T460-160q0-15 10.5-27.5T501-200h339q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120Zm-450-68q-32 32-74.5 50T227-120h-24q-31 0-60-8t-55-23q-11-7-16.5-17.5T66-191q0-11 4-21t12-18l195-194q12-12 28-12t28 12l76 76q14 14 22 32t8 38q0 20-8 38.5T409-207l-19 19Zm134-186q-12 12-28 12t-28-12l-94-94q-12-12-12-28t12-28l290-290q9-9 20.5-13.5T707-832q11 0 22 4.5t20 13.5l65 65q9 9 13.5 20.5T832-706q0 11-4.5 22T814-664L524-374Z"/>
    </Icon>
  );
});

IconMaterialSurgicalFilled.displayName = 'OnesyIconMaterialSurgicalFilled';

export default IconMaterialSurgicalFilled;
