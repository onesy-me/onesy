import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobile = (props: IIcon) => {

  return (
    <Icon
      name='Mobile'

      short_name='Mobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-720q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
};

IconMaterialMobile.displayName = 'OnesyIconMaterialMobile';

export default IconMaterialMobile;
