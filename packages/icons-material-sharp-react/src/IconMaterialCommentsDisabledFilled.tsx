import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommentsDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledFilled'

      short_name='CommentsDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 607-240H80v-527l-53-53 57-57L876-85l-57 57Zm61-167L675-400h45v-80H595l-40-40h165v-80H475l-40-40h285v-80H355L195-880h685v685ZM240-400h207l-80-80H240v80Zm0-120h87l-80-80h-7v80Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledFilled.displayName = 'OnesyIconMaterialCommentsDisabledFilled';

export default IconMaterialCommentsDisabledFilled;
