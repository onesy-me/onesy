import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFontDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadW100'

      short_name='FontDownload'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-382h196l39 111q2 5 5 7t8 2q8 0 11.5-6t1.5-13L492-704q-1-3-3.5-4.5T483-710h-6q-3 0-5.5 1.5T468-704L317-281q-2 7 1.5 13t11.5 6q5 0 8-2t5-7l39-111Zm10-28 86-242h4l86 242H392ZM192-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-576q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v576q0 12 10 22t22 10Zm-32-640v640-640Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadW100.displayName = 'OnesyIconMaterialFontDownloadW100';

export default IconMaterialFontDownloadW100;
