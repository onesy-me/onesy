import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMatchCaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCaseW100'

      short_name='MatchCase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m172-280 146-400h33l149 400h-35l-42-120H246l-41 120h-33Zm85-148h156l-77-217h-2l-77 217Zm383 157q-45 0-72.5-25T540-358q0-42 33-67t85-25q21 0 43 4.5t39 12.5v-27q0-42-19.5-63T662-544q-20 0-37.5 6.5T588-517l-19-19q22-18 44-26t49-8q54 0 80 28.5t26 85.5v176h-28v-42h-4q-16 26-39.5 38.5T640-271Zm0-26q49 0 74.5-31t25.5-79q-14-8-36-12.5t-43-4.5q-42 0-67 17t-25 49q0 26 19.5 43.5T640-297Z"/>
    </Icon>
  );
});

IconMaterialMatchCaseW100.displayName = 'OnesyIconMaterialMatchCaseW100';

export default IconMaterialMatchCaseW100;
