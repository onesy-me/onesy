import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitscreen = (props: IIcon) => {

  return (
    <Icon
      name='Splitscreen'

      short_name='Splitscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-520q-33 0-56.5-23.5T120-600v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v160q0 33-23.5 56.5T760-520H200Zm0-80h560v-160H200v160Zm0 480q-33 0-56.5-23.5T120-200v-160q0-33 23.5-56.5T200-440h560q33 0 56.5 23.5T840-360v160q0 33-23.5 56.5T760-120H200Zm0-80h560v-160H200v160Zm0-400v-160 160Zm0 400v-160 160Z"/>
    </Icon>
  );
};

IconMaterialSplitscreen.displayName = 'OnesyIconMaterialSplitscreen';

export default IconMaterialSplitscreen;
