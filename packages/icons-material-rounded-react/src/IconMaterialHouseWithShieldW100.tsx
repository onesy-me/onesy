import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseWithShieldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldW100'

      short_name='HouseWithShield'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M362-433.47q0 48.47 28.03 93.91T466-278q3.69 2 7.01 2.5t7.01.5q3.69 0 7.01-.5t7.01-2.5Q542-294 570-339.47q28-45.46 28-93.86V-481q0-12.59-6.82-23.33Q584.36-515.07 573-521l-73-37q-9.51-5-19.76-5-10.24 0-20.24 5l-73.04 37.07Q376-515 369-504.35q-7 10.65-7 23.14v47.74ZM272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-312q0-14.25 6.38-27 6.37-12.75 17.62-21l208-157q15.68-12 35.84-12Q500-761 516-749l208 157q11.25 8.25 17.63 21 6.37 12.75 6.37 27v312q0 24.75-17.62 42.37Q712.75-172 688-172H272Zm0-28h416q14 0 23-9t9-23v-312q0-8-3.5-14.5T707-570L499-726q-8-7-19-7t-19 7L253-570q-6 5-9.5 11.5T240-544v312q0 14 9 23t23 9Zm208-267Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShieldW100.displayName = 'OnesyIconMaterialHouseWithShieldW100';

export default IconMaterialHouseWithShieldW100;
