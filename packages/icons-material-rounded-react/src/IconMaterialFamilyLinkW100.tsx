import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyLinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyLinkW100'

      short_name='FamilyLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m500-180 254-373q7-10 6-21.5t-9-19.5L523-829q-10-10-23-10t-23 10L249-594q-8 8-9 19.5t6 21.5l254 373Zm0-331ZM393-66q-42 0-76.5-25T271-156q-8-31-26.5-55.5T196.35-236q-19.76 0-37.06 9Q142-218 130-204q-1.7 2.33-4.26 3.67-2.55 1.33-5.95 1.33-5.79 0-9.79-4.02-4-4.03-4-9.98 0-2 .67-4.47.66-2.47 2.33-4.53 15.62-20.22 38.31-31.11Q170-264 195.54-264 235-264 261-233.5q26 30.5 37 69.5 9 31 35.79 50.5Q360.57-94 393-94q29 0 50.5-17.5T481-152l2-3-261-382q-5.33-8.19-7.67-17.13Q212-563.06 212-572q0-11 4.5-22t12.5-20l232-238q8-8 18-12.5t21-4.5q11 0 21 4.5t18 12.5l232 238q8 9 12.5 20t4.5 22.43q0 8.57-2.33 17.48-2.34 8.92-7.67 17.09L510-145q-25 38-54 58.5T393-66Z"/>
    </Icon>
  );
});

IconMaterialFamilyLinkW100.displayName = 'OnesyIconMaterialFamilyLinkW100';

export default IconMaterialFamilyLinkW100;
