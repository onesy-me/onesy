import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFoodBeverageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageFilled'

      short_name='EmojiFoodBeverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-80h640v80H160Zm560-520h80v-120h-80v120ZM160-280v-560h200v96l-80 64v200h200v-200l-80-64v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v280H160Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageFilled.displayName = 'OnesyIconMaterialEmojiFoodBeverageFilled';

export default IconMaterialEmojiFoodBeverageFilled;
