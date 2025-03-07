import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumerusAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAlt'

      short_name='HumerusAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-320q17 0 28.5-11.5T440-360v-4q0-2-1-4 17 0 29-11.5t12-28.5q0-17-11.5-28.5T440-448q-8 0-15.5 3.5T412-436L309-552q5-5 8-12.5t3-15.5q0-17-11.5-28.5T280-620q-17 0-28.5 11.5T240-580v4q0 2 1 4-17 0-29 11.5T200-532q0 17 11.5 28.5T240-492q9 0 16.5-3.5T269-505l103 116q-6 5-9 13t-3 16q0 17 11.5 28.5T400-320Zm94 200q-30 0-58-11.5T385-164L104-426q-11-10-12.5-24.5T98-477q11-17 29.5-19t32.5 11l280 263q12 11 26.5 16.5T495-200q12 0 23-3.5t20-8.5l281-178q20-13 40.5-1t20.5 35q0 11-5 20t-14 14L580-145q-19 12-40.5 18.5T494-120Zm41-444q36-38 79.5-60.5T736-668q22-6 40.5-12t35.5-12q16-5 31.5 1.5T865-669q7 15 .5 31T843-617q-19 7-40.5 13T757-591q-84 22-125.5 49T554-458q-5 8-14 13t-20 5q-14 0-25-9t-14-22q-16-68-68-133.5T292-713q-14-8-17.5-23.5T279-766q9-14 25.5-19t30.5 4q65 39 118.5 97T535-564Zm-411 45q72 67 158 148.5T440-222q12 11 26.5 16.5T495-200q12 0 23-3.5t20-8.5q63-39 165-103.5T880-428L538-212q-9 5-20 8.5t-23 3.5q-14 0-28.5-5.5T440-222L124-519Z"/>
    </Icon>
  );
});

IconMaterialHumerusAlt.displayName = 'OnesyIconMaterialHumerusAlt';

export default IconMaterialHumerusAlt;
