import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleHindu = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleHindu'

      short_name='TempleHindu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-320q0-17 11.5-28.5T120-520q17 0 28.5 11.5T160-480v40h80l119-395v-45q0-17 11.5-28.5T399-920q17 0 28.5 11.5T439-880v40h81v-40q0-17 11.5-28.5T560-920q17 0 28.5 11.5T600-880v40l120 400h80v-40q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480v320q0 33-23.5 56.5T800-80H560q-17 0-28.5-11.5T520-120v-160h-80v160q0 17-11.5 28.5T400-80H160q-33 0-56.5-23.5T80-160Zm268-360h264l-24-80H372l-24 80Zm48-160h168l-24-80H420l-24 80ZM160-160h200v-120q0-33 23.5-56.5T440-360h80q33 0 56.5 23.5T600-280v120h200v-200h-80q-26 0-47.5-15.5T643-417l-7-23H324l-7 23q-8 26-29.5 41.5T240-360h-80v200Zm320-280Z"/>
    </Icon>
  );
});

IconMaterialTempleHindu.displayName = 'OnesyIconMaterialTempleHindu';

export default IconMaterialTempleHindu;
