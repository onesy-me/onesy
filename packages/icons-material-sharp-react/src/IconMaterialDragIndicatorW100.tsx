import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDragIndicatorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragIndicatorW100'

      short_name='DragIndicator'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200q-16.5 0-28.25-11.75T320-240q0-16.5 11.75-28.25T360-280q16.5 0 28.25 11.75T400-240q0 16.5-11.75 28.25T360-200Zm240 0q-16.5 0-28.25-11.75T560-240q0-16.5 11.75-28.25T600-280q16.5 0 28.25 11.75T640-240q0 16.5-11.75 28.25T600-200ZM360-440q-16.5 0-28.25-11.75T320-480q0-16.5 11.75-28.25T360-520q16.5 0 28.25 11.75T400-480q0 16.5-11.75 28.25T360-440Zm240 0q-16.5 0-28.25-11.75T560-480q0-16.5 11.75-28.25T600-520q16.5 0 28.25 11.75T640-480q0 16.5-11.75 28.25T600-440ZM360-680q-16.5 0-28.25-11.75T320-720q0-16.5 11.75-28.25T360-760q16.5 0 28.25 11.75T400-720q0 16.5-11.75 28.25T360-680Zm240 0q-16.5 0-28.25-11.75T560-720q0-16.5 11.75-28.25T600-760q16.5 0 28.25 11.75T640-720q0 16.5-11.75 28.25T600-680Z"/>
    </Icon>
  );
});

IconMaterialDragIndicatorW100.displayName = 'OnesyIconMaterialDragIndicatorW100';

export default IconMaterialDragIndicatorW100;
