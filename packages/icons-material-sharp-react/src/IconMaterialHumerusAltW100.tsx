import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumerusAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAltW100'

      short_name='HumerusAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-346q11 0 19.5-8.5T418-374v-3.5q0-1.5-1-3.5 3 2 6 2.5t6 .5q11 0 19.5-8.5T457-406q0-11-8.5-19.5T429-434q-8 0-14 4t-10 10L301-537q8-3 13.5-10t5.5-16q0-11-8.5-19.5T292-591q-11 0-19.5 8.5T264-563q0 2 .5 3t.5 3q-3-2-6-2.5t-6-.5q-11 0-19.5 8.5T225-532q0 11 8.5 19.5T253-504q8 0 14.5-4t10.5-11l105 118q-9 2-15 9.5t-6 17.5q0 11 8.5 19.5T390-346ZM115-486l17-22 290 274q15 14 34 21.5t39 7.5q16 0 30.5-4t26.5-12l301-190v30L566-200q-16 10-34 15.5t-38 5.5q-25 0-48.5-9.5T403-216L115-486Zm178-227 17-22q77 43 136 112.5T525-481q43-54 85.5-80.5T743-612q34-9 60.5-17.5T853-648v27q-23 9-48 17t-54 16q-90 24-135 53.5T532-443q-2 2-4.5 4t-7.5 2q-4 0-7.5-3t-4.5-8q-18-74-77.5-147T293-713ZM132-508q64 61 144 136t146 138q15 14 34 21.5t39 7.5q16 0 30.5-4t26.5-12q68-43 150.5-95T853-411L552-221q-12 8-26.5 12t-30.5 4q-20 0-39-7.5T422-234L132-508Z"/>
    </Icon>
  );
});

IconMaterialHumerusAltW100.displayName = 'OnesyIconMaterialHumerusAltW100';

export default IconMaterialHumerusAltW100;
