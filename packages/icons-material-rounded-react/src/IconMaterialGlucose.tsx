import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlucose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Glucose'

      short_name='Glucose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M576-80q-35 0-67-14.5T454-136L250-374q-11-14-9.5-30.5T256-432l18-13q20-15 45-16t46 13l55 35v-387q0-17 11.5-28.5T460-840q17 0 28.5 11.5T500-800v460q0 24-21 35t-41-2l-56-36 144 169q6 7 14 10.5t17 3.5h203q33 0 56.5-23.5T840-240v-280q0-17 11.5-28.5T880-560q17 0 28.5 11.5T920-520v280q0 66-47 113T760-80H576Zm24-600q17 0 28.5 11.5T640-640v160q0 17-11.5 28.5T600-440q-17 0-28.5-11.5T560-480v-160q0-17 11.5-28.5T600-680Zm140 40q17 0 28.5 11.5T780-600v120q0 17-11.5 28.5T740-440q-17 0-28.5-11.5T700-480v-120q0-17 11.5-28.5T740-640Zm-560 80q-59 0-99.5-40.5T40-698q0-34 13.5-59t63.5-82l33-37q12-14 30-14t30 14l33 38q51 59 64 83t13 57q0 57-41 97.5T180-560Zm0-80q25 0 42.5-17t17.5-41q0-17-8.5-30.5T185-784l-5-5-5 5q-32 36-43.5 54T120-698q0 24 17 41t43 17Zm0-58Zm660 538H526h314Z"/>
    </Icon>
  );
});

IconMaterialGlucose.displayName = 'OnesyIconMaterialGlucose';

export default IconMaterialGlucose;
