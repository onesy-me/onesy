import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaW100'

      short_name='Eda'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M315-492v-348h28v348h-28Zm142 0v-388h28v388h-28Zm143 177v-485h28v469l-28 16ZM200-106h349l262-265-26-20-334 198-124-165H200v252Zm-28 28v-308h169l116 155 171-100 159-93 68 50L559-78H172Zm28-308h-28v-374h28v374Zm0-106h400-400Zm0 386h349-349Z"/>
    </Icon>
  );
});

IconMaterialEdaW100.displayName = 'OnesyIconMaterialEdaW100';

export default IconMaterialEdaW100;
