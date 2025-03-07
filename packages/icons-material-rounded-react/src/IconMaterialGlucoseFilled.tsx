import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlucoseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlucoseFilled'

      short_name='Glucose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M576-80q-35 0-67-14.5T454-136L250-374q-11-14-9.5-30.5T256-432l18-13q20-15 45-16t46 13l55 35v-387q0-17 11.5-28.5T460-840q17 0 28.5 11.5T500-800v360h60v-200q0-17 11.5-28.5T600-680q17 0 28.5 11.5T640-640v200h60v-160q0-17 11.5-28.5T740-640q17 0 28.5 11.5T780-600v160h60v-80q0-17 11.5-28.5T880-560q17 0 28.5 11.5T920-520v280q0 66-47 113T760-80H576ZM180-560q-59 0-99.5-40.5T40-698q0-34 13.5-59t63.5-82l33-37q12-14 30-14t30 14l33 38q51 59 64 83t13 57q0 57-41 97.5T180-560Z"/>
    </Icon>
  );
});

IconMaterialGlucoseFilled.displayName = 'OnesyIconMaterialGlucoseFilled';

export default IconMaterialGlucoseFilled;
