import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamiliarFaceAndZoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZoneFilled'

      short_name='FamiliarFaceAndZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-17-2.5-33.5T710-546q-15 3-30 4.5t-30 1.5q-63 0-120-24t-102-70q-28 57-77 99t-111 61q3 98 72.5 166T480-240ZM380-400q-17 0-28.5-11.5T340-440q0-17 11.5-28.5T380-480q17 0 28.5 11.5T420-440q0 17-11.5 28.5T380-400Zm200 0q-17 0-28.5-11.5T540-440q0-17 11.5-28.5T580-480q17 0 28.5 11.5T620-440q0 17-11.5 28.5T580-400ZM40-760v-80q0-33 23.5-56.5T120-920h80q17 0 28.5 11.5T240-880q0 17-11.5 28.5T200-840h-80v80q0 17-11.5 28.5T80-720q-17 0-28.5-11.5T40-760ZM200-40h-80q-33 0-56.5-23.5T40-120v-80q0-17 11.5-28.5T80-240q17 0 28.5 11.5T120-200v80h80q17 0 28.5 11.5T240-80q0 17-11.5 28.5T200-40Zm640 0h-80q-17 0-28.5-11.5T720-80q0-17 11.5-28.5T760-120h80v-120h80v120q0 33-23.5 56.5T840-40Zm0-720v-80h-80q-17 0-28.5-11.5T720-880q0-17 11.5-28.5T760-920h80q33 0 56.5 23.5T920-840v80q0 17-11.5 28.5T880-720q-17 0-28.5-11.5T840-760Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZoneFilled.displayName = 'OnesyIconMaterialFamiliarFaceAndZoneFilled';

export default IconMaterialFamiliarFaceAndZoneFilled;
