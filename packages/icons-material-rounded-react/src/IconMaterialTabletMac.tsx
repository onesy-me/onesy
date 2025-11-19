import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletMac = (props: IIcon) => {

  return (
    <Icon
      name='TabletMac'

      short_name='TabletMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-140q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Zm0-200v120h560v-120H200Zm0-80h560v-400H200v400Zm0-480h560v-40H200v40Zm0 0v-40 40Zm0 560v120-120Z"/>
    </Icon>
  );
};

IconMaterialTabletMac.displayName = 'OnesyIconMaterialTabletMac';

export default IconMaterialTabletMac;
