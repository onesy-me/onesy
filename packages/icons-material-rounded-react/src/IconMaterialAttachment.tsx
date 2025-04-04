import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAttachment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Attachment'

      short_name='Attachment'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-240q-104 0-177-73T80-490q0-104 73-177t177-73h370q75 0 127.5 52.5T880-560q0 75-52.5 127.5T700-380H350q-46 0-78-32t-32-78q0-46 32-78t78-32h330q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520H350q-13 0-21.5 8.5T320-490q0 13 8.5 21.5T350-460h350q42-1 71-29.5t29-70.5q0-42-29-71t-71-29H330q-71-1-120.5 49T160-490q0 70 49.5 119T330-320h350q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240H330Z"/>
    </Icon>
  );
});

IconMaterialAttachment.displayName = 'OnesyIconMaterialAttachment';

export default IconMaterialAttachment;
