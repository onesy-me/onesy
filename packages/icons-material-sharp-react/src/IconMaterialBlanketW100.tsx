import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlanketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlanketW100'

      short_name='Blanket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-172q-39.17 0-66.58-27.42Q92-226.83 92-266v-428q0-39.17 27.42-66.58Q146.83-788 186-788h268q39.17 0 66.58 27.42Q548-733.17 548-694v252h74q23 0 38.5 15.5T676-388v120q0 21 14.5 35.5T726-218q21 0 35.5-14.5T776-268v-278q-29 0-48.5-19.5T708-614v-80h28v-60h28v60h52v-60h28v60h28v80q0 29-19.5 48.5T804-546v278q0 32-23 55t-55 23q-32 0-55-23t-23-55v-118q0-14-9-23t-23-9h-68v144q0 42.07-29.96 72.04Q488.08-172 446-172H186Zm0-28h260.32q30.68 0 52.18-21.74T520-274q0-30.52-21.74-52.26T446-348H238q-13 0-21.5 8.5T208-318q0 13 8.5 21.5T238-288h208q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H238q-24.36 0-41.18-16.82T180-318q0-24.36 16.82-41.18T238-376h208q20.32 0 40.16 5Q506-366 520-351v-343q0-27-19.5-46.5T454-760H186q-27 0-46.5 19.5T120-694v428q0 27 19.5 46.5T186-200Zm0 0h260-326 66Z"/>
    </Icon>
  );
});

IconMaterialBlanketW100.displayName = 'OnesyIconMaterialBlanketW100';

export default IconMaterialBlanketW100;
