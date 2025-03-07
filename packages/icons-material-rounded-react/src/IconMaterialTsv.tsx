import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTsv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tsv'

      short_name='Tsv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-360q13 0 21.5-8.5T310-390v-150h20q13 0 21.5-8.5T360-570q0-13-8.5-21.5T330-600H230q-13 0-21.5 8.5T200-570q0 13 8.5 21.5T230-540h20v150q0 13 8.5 21.5T280-360Zm220 0q17 0 28.5-11.5T540-400v-60q0-17-11.5-31.5T500-506h-60v-34h70q13 0 21.5-8.5T540-570q0-13-8.5-21.5T510-600h-90q-17 0-28.5 11.5T380-560v60q0 17 11.5 30.5T420-456h60v36h-70q-13 0-21.5 8.5T380-390q0 13 8.5 21.5T410-360h90Zm160-102-34-117q-3-9-10.5-15t-17.5-6q-14 0-22.5 11.5T571-563l53 182q3 9 10.5 15t17.5 6h16q10 0 17.5-6t10.5-15l53-182q4-14-4.5-25.5T722-600q-10 0-17.5 6T694-579l-34 117ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTsv.displayName = 'OnesyIconMaterialTsv';

export default IconMaterialTsv;
