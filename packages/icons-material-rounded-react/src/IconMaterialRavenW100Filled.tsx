import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRavenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenW100Filled'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M257.04-729q-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5 11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5ZM390-280l-57 135q-2.11 4.82-7.55 6.91Q320-136 315-138q-5-2-7.5-7.5T307-156l54-128q-100-16-164.5-92.5T132-554.3V-703q0-51.56 36.72-88.28T257-828q13.48 0 25.74 2.5Q295-823 307-818l149 63q9 4 9 13.5T455-728l-73 29v83l287 196H395q-48 0-81-33t-33-81q0-6-4.07-10-4.08-4-9.63-4-6.3 0-10.3 4.03-4 4.02-4 9.97 0 25 8 47t22 40q19.93 26 48.46 40.5Q360-392 395-392h315l101 69 14 89q2 9-3.5 15.5t-14 6.5h-7q-5.5 0-10.5-3.5t-7-8.5l-22-56H529v134q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-134H390Z"/>
    </Icon>
  );
});

IconMaterialRavenW100Filled.displayName = 'OnesyIconMaterialRavenW100Filled';

export default IconMaterialRavenW100Filled;
