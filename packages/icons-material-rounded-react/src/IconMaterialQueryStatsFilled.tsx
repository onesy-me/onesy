import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueryStatsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueryStatsFilled'

      short_name='QueryStats'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M70-258q-13-9-15.5-24.5T60-312l151-242q11-17 30.5-18.5T275-559l85 99 127-207q11-19 33.5-19t34.5 18l41 62q11 17 6.5 32.5T585-550q-13 8-28.5 6.5T530-562l-7-10-123 200q-11 17-31 19t-34-14l-85-99-122 197q-9 15-26.5 18.5T70-258Zm573 121q-75 0-127.5-52.5T463-317q0-75 52.5-127.5T643-497q75 0 127.5 52.5T823-317q0 26-7 50.5T795-221l96 96q12 12 12.5 28T892-69q-12 12-28.5 12T835-69l-97-96q-20 14-44.5 21t-50.5 7Zm0-80q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm49-331q-13-8-18-23t6-32l152-241q9-14 26-18t31 7q13 9 16 24.5t-5 29.5L747-561q-11 17-26.5 19t-28.5-6Z"/>
    </Icon>
  );
});

IconMaterialQueryStatsFilled.displayName = 'OnesyIconMaterialQueryStatsFilled';

export default IconMaterialQueryStatsFilled;
