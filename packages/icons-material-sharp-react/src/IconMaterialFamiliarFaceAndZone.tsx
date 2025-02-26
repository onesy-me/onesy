import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamiliarFaceAndZone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamiliarFaceAndZone'

      short_name='FamiliarFaceAndZone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm0-80q100 0 170-70t70-170q0-17-2.5-33.5T710-546q-15 3-30 4.5t-30 1.5q-63 0-120-24t-102-70q-28 57-77 99t-111 61q3 98 72.5 166T480-240ZM256-566q44-23 67-53.5t45-72.5q-38 20-67 52.5T256-566Zm124 166q-17 0-28.5-11.5T340-440q0-17 11.5-28.5T380-480q17 0 28.5 11.5T420-440q0 17-11.5 28.5T380-400Zm270-220h12q6 0 12-1-33-45-83.5-72T480-720h-12q-6 0-11 1 39 45 82.5 72T650-620Zm-70 220q-17 0-28.5-11.5T540-440q0-17 11.5-28.5T580-480q17 0 28.5 11.5T620-440q0 17-11.5 28.5T580-400ZM40-720v-200h200v80H120v120H40Zm0 680v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720Zm120-680v-120H720v-80h200v200h-80Zm-383 1Zm-89 27Z"/>
    </Icon>
  );
});

IconMaterialFamiliarFaceAndZone.displayName = 'OnesyIconMaterialFamiliarFaceAndZone';

export default IconMaterialFamiliarFaceAndZone;
