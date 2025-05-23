import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOtherHouses = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHouses'

      short_name='OtherHouses'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-295l-40 31q-14 10-30 8t-26-16q-10-14-7.5-30T72-528l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l360 275q13 10 15 26t-8 30q-10 13-26 15t-29-8l-41-30v295q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200Zm80 0h480v-356L480-739 240-556v356Zm80-160q17 0 28.5-11.5T360-400q0-17-11.5-28.5T320-440q-17 0-28.5 11.5T280-400q0 17 11.5 28.5T320-360Zm160 0q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm160 0q17 0 28.5-11.5T680-400q0-17-11.5-28.5T640-440q-17 0-28.5 11.5T600-400q0 17 11.5 28.5T640-360ZM240-200h480-480Z"/>
    </Icon>
  );
});

IconMaterialOtherHouses.displayName = 'OnesyIconMaterialOtherHouses';

export default IconMaterialOtherHouses;
