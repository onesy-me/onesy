import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomParentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentW100'

      short_name='BedroomParent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-308h28v-64h440v64h28v-202h-30v-106H262v106h-30v202Zm262-202v-78h176v78H494Zm-204 0v-78h176v78H290Zm-30 110v-80h440v80H260ZM132-132v-696h696v696H132Zm28-28h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentW100.displayName = 'OnesyIconMaterialBedroomParentW100';

export default IconMaterialBedroomParentW100;
