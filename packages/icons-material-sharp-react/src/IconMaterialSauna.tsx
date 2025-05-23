import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSauna = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sauna'

      short_name='Sauna'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v800H80Zm80-240v160h80v-80h-40v-80h-40Zm0-80h40v-40h40v-100q0-25 17.5-42.5T300-600h80q25 0 42.5 17.5T440-540v100h40v40h320v-400H160v400Zm100 100h160v-80H260v80Zm80-340q-25 0-42.5-17.5T280-700q0-25 17.5-42.5T340-760q25 0 42.5 17.5T400-700q0 25-17.5 42.5T340-640Zm-20 480h40v-80h-40v80Zm120 0h360v-160H480v80h-40v80Zm50-400q2-13 2.5-19.5t.5-13.5q0-11-4.5-21T470-641q-15-19-22.5-38t-7.5-39q0-8 1-16.5l3-25.5h60q-2 11-3 20.5t-1 21.5q0 11 4.5 21.5T520-674q18 22 26 41.5t8 39.5q0 11-1 18t-3 15h-60Zm100 0q2-13 2.5-19.5t.5-13.5q0-11-4.5-21T570-641q-15-19-22.5-38t-7.5-39q0-8 1-16.5l3-25.5h60q-2 11-3 20.5t-1 21.5q0 11 4.5 21.5T620-674q18 22 26 41.5t8 39.5q0 11-1 18t-3 15h-60Zm102 0q2-13 2.5-19.5t.5-13.5q0-11-4.5-21T672-641q-15-19-22.5-38t-7.5-39q0-8 1-16.5l3-25.5h60q-2 11-3 20.5t-1 21.5q0 11 4.5 21.5T722-674q18 22 26 41.5t8 39.5q0 11-1 18t-3 15h-60ZM260-300v-80 80Z"/>
    </Icon>
  );
});

IconMaterialSauna.displayName = 'OnesyIconMaterialSauna';

export default IconMaterialSauna;
