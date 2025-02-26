import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidgetsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsFilled'

      short_name='Widgets'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Z"/>
    </Icon>
  );
});

IconMaterialWidgetsFilled.displayName = 'OnesyIconMaterialWidgetsFilled';

export default IconMaterialWidgetsFilled;
