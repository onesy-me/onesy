import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIframe = (props: IIcon) => {

  return (
    <Icon
      name='Iframe'

      short_name='Iframe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-420h200v-80H460v80Zm-20 60q-17 0-28.5-11.5T400-400v-120q0-17 11.5-28.5T440-560h240q17 0 28.5 11.5T720-520v120q0 17-11.5 28.5T680-360H440ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Z"/>
    </Icon>
  );
};

IconMaterialIframe.displayName = 'OnesyIconMaterialIframe';

export default IconMaterialIframe;
