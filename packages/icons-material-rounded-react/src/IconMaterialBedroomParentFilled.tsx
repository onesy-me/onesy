import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedroomParentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedroomParentFilled'

      short_name='BedroomParent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-340h440v30q0 13 8.5 21.5T730-280q13 0 21.5-8.5T760-310v-124q0-21-8-39.5T730-506v-94q0-33-23.5-56.5T650-680H520q-11 0-21 3t-19 9q-9-6-19-9t-21-3H310q-33 0-56.5 23.5T230-600v94q-14 14-22 32.5t-8 39.5v124q0 13 8.5 21.5T230-280q13 0 21.5-8.5T260-310v-30Zm0-60v-40q0-17 11.5-28.5T300-480h360q17 0 28.5 11.5T700-440v40H260Zm30-140v-80h160v80H290Zm220 0v-80h160v80H510ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Z"/>
    </Icon>
  );
});

IconMaterialBedroomParentFilled.displayName = 'OnesyIconMaterialBedroomParentFilled';

export default IconMaterialBedroomParentFilled;
