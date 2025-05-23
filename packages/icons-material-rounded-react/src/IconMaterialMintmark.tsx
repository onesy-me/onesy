import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMintmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mintmark'

      short_name='Mintmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M704-200 532-372q-11-11-11.5-27.5T531-428q11-12 28-12t29 12l172 172v-144q0-17 11.5-28.5T800-440q17 0 28.5 11.5T840-400v240q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160q0-17 11.5-28.5T560-200h144ZM240-320h-80q-17 0-28.5-11.5T120-360q0-17 11.5-28.5T160-400h200v-120H200q-33 0-56.5-23.5T120-600v-120q0-33 23.5-56.5T200-800h40q0-17 11.5-28.5T280-840q17 0 28.5 11.5T320-800h80q17 0 28.5 11.5T440-760q0 17-11.5 28.5T400-720H200v120h160q33 0 56.5 23.5T440-520v120q0 33-23.5 56.5T360-320h-40q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320Z"/>
    </Icon>
  );
});

IconMaterialMintmark.displayName = 'OnesyIconMaterialMintmark';

export default IconMaterialMintmark;
