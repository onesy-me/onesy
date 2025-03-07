import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotTouch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotTouch'

      short_name='DoNotTouch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-331v-429q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v430q0 20-12.5 30T800-290q-15 0-27.5-10.5T760-331ZM280-790v-30q0-17 11.5-28.5T320-860q17 0 28.5 11.5T360-820v30q0 17-11.5 28.5T320-750q-17 0-28.5-11.5T280-790Zm160 150v-240q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v241q0 17-11.5 28T480-600q-17 0-28.5-11.5T440-640Zm160 149v-349q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v349q0 17-11.5 28.5T640-451q-17 0-28.5-11.5T600-491Zm117 361L360-487v147q0 24-21.5 35.5T297-307l-85-60 157 229q5 8 14 13t19 5h278q10 0 19.5-2.5T717-130ZM402-40q-30 0-56-13.5T303-92L67-438q-8-12-7-26t12-24q19-19 45-22t47 12l116 81v-150L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-16-15q-20 15-44 23.5T680-40H402Zm137-269Zm61-164Z"/>
    </Icon>
  );
});

IconMaterialDoNotTouch.displayName = 'OnesyIconMaterialDoNotTouch';

export default IconMaterialDoNotTouch;
