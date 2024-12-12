import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormW100Filled'

      short_name='DynamicForm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-520v-254h414v254H106Zm0 334v-254h494v254H106Zm574 0v-334h-80v-254h242l-80 206h78L680-186Zm-477-97h60v-60h-60v60Zm0-334h60v-60h-60v60Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormW100Filled.displayName = 'OnesyIconMaterialDynamicFormW100Filled';

export default IconMaterialDynamicFormW100Filled;
