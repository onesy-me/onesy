import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaLink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLink'

      short_name='MediaLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m433-263-102 64q-10 6-20.5.5T300-216v-128q0-12 10.5-17.5t20.5.5l102 64q10 6 10 17t-10 17Zm87-297q-50 0-85-35t-35-85q0-50 35-85t85-35h20q13 0 21.5 8.5T570-770q0 13-8.5 21.5T540-740h-20q-25 0-42.5 17.5T460-680q0 25 17.5 42.5T520-620h20q13 0 21.5 8.5T570-590q0 13-8.5 21.5T540-560h-20Zm160 0h-20q-13 0-21.5-8.5T630-590q0-13 8.5-21.5T660-620h20q25 0 42.5-17.5T740-680q0-25-17.5-42.5T680-740h-20q-13 0-21.5-8.5T630-770q0-13 8.5-21.5T660-800h20q50 0 85 35t35 85q0 50-35 85t-85 35Zm-30-90H550q-13 0-21.5-8.5T520-680q0-13 8.5-21.5T550-710h100q13 0 21.5 8.5T680-680q0 13-8.5 21.5T650-650Zm-6 250v-80h196v-360H360v360h-80v-360q0-33 23.5-56.5T360-920h480q33 0 56.5 23.5T920-840v360q0 33-23.5 56.5T840-400H644ZM120-40q-33 0-56.5-23.5T40-120v-320q0-33 23.5-56.5T120-520h480q33 0 56.5 23.5T680-440v320q0 33-23.5 56.5T600-40H120Zm0-80h480v-320H120v320Zm480-540ZM360-280Z"/>
    </Icon>
  );
});

IconMaterialMediaLink.displayName = 'OnesyIconMaterialMediaLink';

export default IconMaterialMediaLink;
