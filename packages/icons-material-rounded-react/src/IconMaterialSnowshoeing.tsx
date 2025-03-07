import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnowshoeing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snowshoeing'

      short_name='Snowshoeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-40q-18 0-43.5-19T255-98l-77-99q-8-10-6.5-22t11.5-20q10-8 22.5-6.5T226-234l27 35 115-81 64-325-72 28v97q0 17-11.5 28.5T320-440q-17 0-28.5-11.5T280-480v-122q0-12 7-22t18-15l140-59q32-14 47-18t28-4q21 0 38.5 11t29.5 29l40 63q22 33 55 58.5t77 34.5q17 4 28.5 15.5T800-480q0 17-11.5 28t-27.5 9q-54-8-101-34t-80-64l-24 120 72 68q6 6 9 13.5t3 15.5v224q15-1 28.5-5t25.5-11q4-2 7.5-3t7.5-1q14 0 22.5 9.5T740-90q0 8-3.5 14.5T725-64q-20 12-42.5 18T635-40H510q-13 0-21.5-8.5T480-70q0-13 8.5-21.5T510-100h50v-181l-84-80-32 115q-2 7-6 12.5t-10 9.5l-125 89 3 4q9 12 20.5 20T352-98q9 5 14 10.5t5 16.5q0 13-9 22t-22 9Zm240-700q-33 0-56.5-23.5T500-820q0-33 23.5-56.5T580-900q33 0 56.5 23.5T660-820q0 33-23.5 56.5T580-740Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeing.displayName = 'OnesyIconMaterialSnowshoeing';

export default IconMaterialSnowshoeing;
