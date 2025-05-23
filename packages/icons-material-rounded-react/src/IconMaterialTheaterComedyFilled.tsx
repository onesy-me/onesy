import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTheaterComedyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheaterComedyFilled'

      short_name='TheaterComedy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-100 0-170-70T40-320v-200q0-33 23.5-56.5T120-600h320q33 0 56.5 23.5T520-520v200q0 100-70 170T280-80Zm-80-300q17 0 28.5-11.5T240-420q0-17-11.5-28.5T200-460q-17 0-28.5 11.5T160-420q0 17 11.5 28.5T200-380Zm160 0q17 0 28.5-11.5T400-420q0-17-11.5-28.5T360-460q-17 0-28.5 11.5T320-420q0 17 11.5 28.5T360-380Zm560-420v200q0 100-70 170t-170 70q-18 0-35.5-2.5T610-370q-14-5-22-17t-8-27v-126q0-47-29-82t-74-35q-16 0-26.5-11.5T440-697v-103q0-33 23.5-56.5T520-880h320q33 0 56.5 23.5T920-800ZM600-660q17 0 28.5-11.5T640-700q0-17-11.5-28.5T600-740q-17 0-28.5 11.5T560-700q0 17 11.5 28.5T600-660Zm160 0q17 0 28.5-11.5T800-700q0-17-11.5-28.5T760-740q-17 0-28.5 11.5T720-700q0 17 11.5 28.5T760-660Zm-80 60q-29 0-55.5 11.5T586-551q-5 10 2.5 18.5T608-524h144q12 0 19.5-8.5T774-551q-12-26-38.5-37.5T680-600ZM280-244q28 0 53-11t39-35q6-10 0-20t-18-10H206q-12 0-18 10t0 20q14 24 39 35t53 11Z"/>
    </Icon>
  );
});

IconMaterialTheaterComedyFilled.displayName = 'OnesyIconMaterialTheaterComedyFilled';

export default IconMaterialTheaterComedyFilled;
