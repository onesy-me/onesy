import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsGolfW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGolfW100Filled'

      short_name='SportsGolf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.19-372Q385-372 318.5-438.31T252-599.81q0-95.19 66.31-161.69t161.5-66.5q95.19 0 161.69 66.31t66.5 161.5q0 95.19-66.31 161.69T480.19-372ZM400-600q17 0 28.5-11.5T440-640q0-17-11.5-28.5T400-680q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600Zm160 0q17 0 28.5-11.5T600-640q0-17-11.5-28.5T560-680q-17 0-28.5 11.5T520-640q0 17 11.5 28.5T560-600Zm-80-80q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm-14 542v-40q0-45-30.5-75.5T360-284h-40v-28h320v28h-40q-45 0-75.5 30.5T494-178v40h-28Z"/>
    </Icon>
  );
});

IconMaterialSportsGolfW100Filled.displayName = 'OnesyIconMaterialSportsGolfW100Filled';

export default IconMaterialSportsGolfW100Filled;
