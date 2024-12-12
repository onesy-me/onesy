import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSlightRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightRight'

      short_name='TurnSlightRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-160q-17 0-28.5-11.5T360-200v-263q0-16 6-30.5t17-25.5l201-201h-50q-17 0-28.5-11.5T494-760q0-17 11.5-28.5T534-800h146q17 0 28.5 11.5T720-760v146q0 17-11.5 28.5T680-574q-17 0-28.5-11.5T640-614v-50L440-464v264q0 17-11.5 28.5T400-160Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightRight.displayName = 'OnesyIconMaterialTurnSlightRight';

export default IconMaterialTurnSlightRight;
