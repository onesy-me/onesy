import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendToMobile = (props: IIcon) => {

  return (
    <Icon
      name='SendToMobile'

      short_name='SendToMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-320-56-56 62-64H480v-80h206l-62-64 56-56 160 160-160 160ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
};

IconMaterialSendToMobile.displayName = 'OnesyIconMaterialSendToMobile';

export default IconMaterialSendToMobile;
