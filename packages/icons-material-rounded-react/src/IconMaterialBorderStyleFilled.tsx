import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderStyleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleFilled'

      short_name='BorderStyle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-600q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600Zm0 160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440Zm0 160q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280ZM320-120q-17 0-28.5-11.5T280-160q0-17 11.5-28.5T320-200q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120Zm160 0q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120Zm160 0q-17 0-28.5-11.5T760-160q0-17 11.5-28.5T800-200q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120Zm-680-40v-600q0-33 23.5-56.5T200-840h600q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H200v600q0 17-11.5 28.5T160-120q-17 0-28.5-11.5T120-160Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleFilled.displayName = 'OnesyIconMaterialBorderStyleFilled';

export default IconMaterialBorderStyleFilled;
