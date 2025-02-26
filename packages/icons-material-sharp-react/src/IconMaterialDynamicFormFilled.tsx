import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicFormFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormFilled'

      short_name='DynamicForm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-520v-280h440v280H80Zm0 360v-280h520v280H80Zm600 0v-360h-80v-280h280l-80 200h80L680-160ZM190-270h60v-60h-60v60Zm0-360h60v-60h-60v60Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormFilled.displayName = 'OnesyIconMaterialDynamicFormFilled';

export default IconMaterialDynamicFormFilled;
