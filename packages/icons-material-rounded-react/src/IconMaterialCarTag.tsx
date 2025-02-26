import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarTag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarTag'

      short_name='CarTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-320q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm360 0q20 0 36-12t21-31q-20-4-38-13.5T606-401l-25-25q-10 8-15.5 20t-5.5 26q0 25 17.5 42.5T620-320Zm-460 40v-200 200ZM80-466q0-7 1-14t3-13l80-227q6-18 21.5-29t34.5-11h100q17 0 28.5 11.5T360-720q0 17-11.5 28.5T320-680h-86l-42 120h248q17 0 28.5 11.5T480-520q0 17-11.5 28.5T440-480H160v200h560v-40q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v140q0 25-17.5 42.5T740-120q-25 0-42.5-17.5T680-180v-20H200v20q0 25-17.5 42.5T140-120q-25 0-42.5-17.5T80-180v-286Zm520-254q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Zm62 262L458-662q-8-8-13-19.5t-5-23.5v-155q0-25 17.5-42.5T500-920h155q12 0 23.5 5t19.5 13l204 204q17 17 17 42.5T902-613L747-458q-17 17-42.5 17T662-458Zm43-70 127-127-185-185H520v127l185 185Zm-29-156Z"/>
    </Icon>
  );
});

IconMaterialCarTag.displayName = 'OnesyIconMaterialCarTag';

export default IconMaterialCarTag;
