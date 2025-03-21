import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusFilled'

      short_name='HdrPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-320v30q0 13 8.5 21.5T610-260q13 0 21.5-8.5T640-290v-30h30q13 0 21.5-8.5T700-350q0-13-8.5-21.5T670-380h-30v-30q0-13-8.5-21.5T610-440q-13 0-21.5 8.5T580-410v30h-30q-13 0-21.5 8.5T520-350q0 13 8.5 21.5T550-320h30ZM340-580h80v70q0 13 8.5 21.5T450-480q13 0 21.5-8.5T480-510v-180q0-13-8.5-21.5T450-720q-13 0-21.5 8.5T420-690v50h-80v-50q0-13-8.5-21.5T310-720q-13 0-21.5 8.5T280-690v180q0 13 8.5 21.5T310-480q13 0 21.5-8.5T340-510v-70Zm180 70q0 13 8.5 21.5T550-480h90q24 0 42-18t18-42v-120q0-24-18-42t-42-18h-90q-13 0-21.5 8.5T520-690v180ZM420-340h-80v-40h80v40Zm-80 60h44l27 63q3 8 10.5 12.5T437-200q15 0 23.5-13t2.5-27l-19-44q15-9 25.5-23.5T480-340v-40q0-25-17.5-42.5T420-440H310q-13 0-21.5 8.5T280-410v180q0 13 8.5 21.5T310-200q13 0 21.5-8.5T340-230v-50Zm240-260v-120h60v120h-60ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusFilled.displayName = 'OnesyIconMaterialHdrPlusFilled';

export default IconMaterialHdrPlusFilled;
