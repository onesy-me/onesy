import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentW100Filled'

      short_name='Attachment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M341-283q-86.94 0-147.97-59.5T132-488.5q0-86.5 61.03-146.5T341-695h343q60 0 102 41t42 101q0 60-42 101t-102 41H359q-32 0-55.5-22.36t-23.5-54.5q0-32.14 22.98-55.64T359-567h307q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H359q-21 0-36 14.5T308-489q0 21 15 35.5t36 14.5h326q48 0 81.5-32.82T800-553q0-47.88-34-80.94Q732-667 684-667H341q-75 0-128 52t-53 126.86q0 73.81 53 125.47Q266-311 341-311h325q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H341Z"/>
    </Icon>
  );
});

IconMaterialAttachmentW100Filled.displayName = 'OnesyIconMaterialAttachmentW100Filled';

export default IconMaterialAttachmentW100Filled;
