import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDynamicForm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicForm'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M4,9h7V6H4V9z M4,18h9v-3H4V18z" opacity=".3"/><path d="M13,11H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h9V11z M4,9h7V6H4V9z M15,20H4c-1.1,0-2-0.9-2-2v-3c0-1.1,0.9-2,2-2h11V20z M4,18h9v-3H4V18z M22,9h-2l2-5h-7v7h2v9L22,9z M4.75,17.25h1.5v-1.5h-1.5V17.25z M4.75,8.25h1.5v-1.5h-1.5V8.25z"/></g>
    </Icon>
  );
});

IconMaterialDynamicForm.displayName = 'OnesyIconMaterialDynamicForm';

export default IconMaterialDynamicForm;
