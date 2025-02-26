import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentsDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabled'

      short_name='CommentsDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-527l-53-53 57-57L876-85l-57 57-212-212H80Zm800 45L755-320h45v-480H275l-80-80h685v685ZM160-320h367l-80-80H240v-80h127l-40-40h-87v-80h7l-87-87v367Zm515-80-80-80h125v80h-45ZM555-520l-80-80h245v80H555ZM435-640l-80-80h365v80H435Zm-91 136Zm171-56Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabled.displayName = 'OnesyIconMaterialCommentsDisabled';

export default IconMaterialCommentsDisabled;
