import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamApps = (props: IIcon) => {

  return (
    <Icon
      name='StreamApps'

      short_name='StreamApps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-440h200v-120H640v120Zm-80 160v-360h360v280H640l-80 80ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Zm80-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Zm360-280v-120 120Z"/>
    </Icon>
  );
};

IconMaterialStreamApps.displayName = 'OnesyIconMaterialStreamApps';

export default IconMaterialStreamApps;
