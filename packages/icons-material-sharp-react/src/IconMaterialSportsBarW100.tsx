import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBarW100'

      short_name='SportsBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-200h313v-400h-86q-36 0-57.5 15.5T438-537q-38 42-65.5 59T319-458v258Zm-28 28v-287q-52-11-85.5-45T172-594q0-45 27-80.5t75-50.5q21-46 59.5-74.5T426-828q29 0 57.5 10t57.5 36q8-4 15.5-5.5T573-789q53 0 87.5 40.5T695-655q0 18-1.5 31t-5.5 24h100v339H660v89H291Zm-91-422q0 44 31 75t75 31q37 0 62-20t49-46q29-32 57-53t73-21h120q6-56-22-94.5T573-761q-11 0-20 1.5t-20 7.5l-20-17q-14-11-35.5-21T426-800q-39 0-71.5 20.5T304-722l-10 20-22 7q-33 11-52.5 38.5T200-594Zm460 305h100v-283H660v283Zm-341 89h313-313Z"/>
    </Icon>
  );
});

IconMaterialSportsBarW100.displayName = 'OnesyIconMaterialSportsBarW100';

export default IconMaterialSportsBarW100;
