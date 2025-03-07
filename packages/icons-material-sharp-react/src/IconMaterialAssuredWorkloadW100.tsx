import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAssuredWorkloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadW100'

      short_name='AssuredWorkload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M278-280v-332h28v332h-28Zm188 0v-332h28v332h-28ZM160-692v-20l320-150 320 150v20H160Zm84-28h472L480-830 244-720Zm-84 548v-28h433q0 8 1 14.5t2 13.5H160Zm494-205v-235h28v221l-28 14ZM800-40q-56-14-92-63.5T672-214v-82l128-64 128 64v82q0 61-36 110.5T800-40Zm-29-102 116-116-20-20-96 96-39-39-20 20 59 59ZM244-720h472-472Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadW100.displayName = 'OnesyIconMaterialAssuredWorkloadW100';

export default IconMaterialAssuredWorkloadW100;
