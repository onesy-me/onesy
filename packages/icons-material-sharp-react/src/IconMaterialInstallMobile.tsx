import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInstallMobile = (props: IIcon) => {

  return (
    <Icon
      name='InstallMobile'

      short_name='InstallMobile'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h360v80H280v40h280v80H280v480h400v-80h80v280H200Zm80-120v40h400v-40H280Zm440-240L520-600l56-56 104 104v-288h80v288l104-104 56 56-200 200ZM280-800v-40 40Zm0 640v40-40Z"/>
    </Icon>
  );
};

IconMaterialInstallMobile.displayName = 'OnesyIconMaterialInstallMobile';

export default IconMaterialInstallMobile;
