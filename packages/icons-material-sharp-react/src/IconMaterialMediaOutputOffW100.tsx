import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMediaOutputOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaOutputOffW100'

      short_name='MediaOutputOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-548Zm46 416v-216q0-41.39 14-76.7 14-35.3 40-63.3l20 20q-21.7 23.88-33.85 54.44Q440-383 440-348v48h68v168h-96Zm-280-80v-582h28v554h152v28H132Zm420-302-22-22q20.1-9.57 42.82-14.78Q595.53-556 620-556q86.67 0 147.33 60.67Q828-434.67 828-348v110l-28-28v-82q0-75-52.5-127.5T620-528q-18.14 0-35.07 3.5T552-514ZM312-305q-39-11-64.5-43.5T222-424q0-51.37 36.31-87.69Q294.63-548 346-548q9.5 0 18.25 1.5T381-543q-4.67 5.94-8.83 12.47Q368-524 363-518q-5-1-8.5-1.5t-8.5-.5q-40 0-68 28t-28 68q0 31 17.5 55t44.5 35v29Zm-46-495-28-28h322v178q-7 2-14.12 3.45-7.12 1.44-13.88 3.55v-157H266Zm162 95Zm374 593L98-816l20-20 704 704-20 20Z"/>
    </Icon>
  );
});

IconMaterialMediaOutputOffW100.displayName = 'OnesyIconMaterialMediaOutputOffW100';

export default IconMaterialMediaOutputOffW100;
