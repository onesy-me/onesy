import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMosqueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueW100'

      short_name='Mosque'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-146v-480q-18-8-29-21.88Q26-661.76 26-680q0-16 13-36.5T80-763q28 26 41 46.5t13 36.5q0 18.24-11 32.12Q112-634 94-626v212h132v-160h90q-24-20-37-45.5T266-676q0-33.23 16.01-61.48Q298.03-765.72 325-784l155-105 155 105q26.97 18.28 42.99 46.52Q694-709.23 694-676q0 31-13 56.5T644-574h90v160h132v-212q-18-8-29-21.88-11-13.88-11-32.12 0-16 13-36.5t41-46.5q28 26 41 46.5t13 36.5q0 18.24-11 32.12Q912-634 894-626v480H546v-200H414v200H66Zm330-428h168q42 0 72-30t30-71.85Q666-702 654-725t-34-37l-140-93-140 93q-22 14-34 37t-12 49.15Q294-634 324-604q30 30 72 30ZM94-174h292v-200h188v200h292v-212H706v-134q0-11-7.5-18.5T680-546H280q-11 0-18.5 7.5T254-520v134H94v212Zm386-372Zm0-28Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialMosqueW100.displayName = 'OnesyIconMaterialMosqueW100';

export default IconMaterialMosqueW100;
