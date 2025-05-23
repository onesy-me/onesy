import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnpavedRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpavedRoadFilled'

      short_name='UnpavedRoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-200q-25 0-42.5-2.5T360-220q0-17 17.5-28.5T420-260q25 0 42.5 11.5T480-220q0 15-17.5 17.5T420-200Zm320 80q-25 0-42.5-2.5T680-140q0-17 17.5-28.5T740-180q25 0 42.5 11.5T800-140q0 15-17.5 17.5T740-120Zm-200 0q-25 0-42.5-2.5T480-140q0-17 17.5-28.5T540-180q25 0 42.5 11.5T600-140q0 15-17.5 17.5T540-120Zm-320 0q-25 0-42.5-2.5T160-140q0-17 17.5-28.5T220-180q25 0 42.5 11.5T280-140q0 15-17.5 17.5T220-120Zm160 40q-25 0-42.5-2.5T320-100q0-17 17.5-28.5T380-140q25 0 42.5 11.5T440-100q0 15-17.5 17.5T380-80ZM240-320v20q0 25-17.5 42.5T180-240q-25 0-42.5-17.5T120-300v-280q0-10 2-19.5t5-19.5l77-221q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l77 221q3 10 5 19.5t2 19.5v280q0 25-17.5 42.5T780-240q-25 0-42.5-17.5T720-300v-20H240Zm-8-360h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-500q0-25-17.5-42.5T300-560q-25 0-42.5 17.5T240-500q0 25 17.5 42.5T300-440Zm360 0q25 0 42.5-17.5T720-500q0-25-17.5-42.5T660-560q-25 0-42.5 17.5T600-500q0 25 17.5 42.5T660-440Z"/>
    </Icon>
  );
});

IconMaterialUnpavedRoadFilled.displayName = 'OnesyIconMaterialUnpavedRoadFilled';

export default IconMaterialUnpavedRoadFilled;
