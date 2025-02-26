import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoreTimeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeW100'

      short_name='MoreTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440.14-172q-64.14 0-120.22-23.94-56.07-23.95-98.03-65.85-41.95-41.91-65.92-97.92Q132-415.72 132-479.86q0-64.14 23.96-120.22 23.95-56.07 65.87-98.03 41.93-41.95 97.96-65.92Q375.83-788 440-788q21 0 40.5 2.5T520-778v30q-20-6-39.5-9t-40.5-3q-116 0-198 82t-82 198q0 116 82 198t198 82q116 0 198-82t82-198.17q0-10.83-1-22.83-1-12-4-23h28q2 9 3.5 22t1.5 24q0 64.17-23.94 120.21-23.95 56.03-65.85 97.96-41.91 41.92-97.92 65.87Q504.28-172 440.14-172ZM570-330 426-474v-206h28v194l136 136-20 20Zm150-276v-120H600v-28h120v-120h28v120h120v28H748v120h-28Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeW100.displayName = 'OnesyIconMaterialMoreTimeW100';

export default IconMaterialMoreTimeW100;
