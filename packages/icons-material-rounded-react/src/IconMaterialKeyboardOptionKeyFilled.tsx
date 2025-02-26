import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardOptionKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKeyFilled'

      short_name='KeyboardOptionKey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M637-200q-22 0-40-10.5T568-240L314-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h154q22 0 40 10.5t29 29.5l254 440h163q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H637Zm3-480q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyFilled.displayName = 'OnesyIconMaterialKeyboardOptionKeyFilled';

export default IconMaterialKeyboardOptionKeyFilled;
