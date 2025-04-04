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
      <path d="M351-200h249q14 0 23-9t9-23v-368h-86q-36 0-57.5 15.5T438-537q-38 42-65.5 59T319-458v226q0 14 9 23t23 9Zm-60-32v-227q-52-11-85.5-45T172-594q0-45 27-80.5t75-50.5q21-46 59.5-74.5T426-828q29 0 57.5 10t57.5 36q8-4 15.5-5.5T573-789q53 0 87.5 40.5T695-655q0 18-1.5 31t-5.5 24h30q29 0 49.5 20t20.5 49v200q0 29-20.5 49.5T718-261h-58v29q0 25-17.5 42.5T600-172H351q-25 0-42.5-17.5T291-232Zm-91-362q0 44 31 75t75 31q37 0 62-20t49-46q29-32 57-53t73-21h120q6-56-22-94.5T573-761q-11 0-20 1.5t-20 7.5l-20-17q-14-11-35.5-21T426-800q-39 0-71.5 20.5T304-722l-10 20-22 7q-33 11-52.5 38.5T200-594Zm460 305h58q17 0 29.5-12.5T760-331v-200q0-18-12-29.5T718-572h-58v283Zm-309 89h-32 313-281Z"/>
    </Icon>
  );
});

IconMaterialSportsBarW100.displayName = 'OnesyIconMaterialSportsBarW100';

export default IconMaterialSportsBarW100;
