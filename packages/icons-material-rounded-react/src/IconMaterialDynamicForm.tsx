import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicForm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicForm'

      short_name='DynamicForm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-520q-33 0-56.5-23.5T80-600v-120q0-33 23.5-56.5T160-800h320q17 0 28.5 11.5T520-760v200q0 17-11.5 28.5T480-520H160Zm0-80h280v-120H160v120Zm0 440q-33 0-56.5-23.5T80-240v-120q0-33 23.5-56.5T160-440h400q17 0 28.5 11.5T600-400v200q0 17-11.5 28.5T560-160H160Zm0-80h360v-120H160v120Zm520-280h-40q-17 0-28.5-11.5T600-560v-200q0-17 11.5-28.5T640-800h181q21 0 33 17.5t4 37.5l-58 145h18q22 0 33 18.5t3 38.5L718-174q-3 8-9 11t-13 1q-7-2-11.5-7t-4.5-13v-338Zm-520-80v-120 120Zm0 360v-120 120Zm90-420q0-13-8.5-21.5T220-690q-13 0-21.5 8.5T190-660q0 13 8.5 21.5T220-630q13 0 21.5-8.5T250-660Zm-30 390q13 0 21.5-8.5T250-300q0-13-8.5-21.5T220-330q-13 0-21.5 8.5T190-300q0 13 8.5 21.5T220-270Z"/>
    </Icon>
  );
});

IconMaterialDynamicForm.displayName = 'OnesyIconMaterialDynamicForm';

export default IconMaterialDynamicForm;
