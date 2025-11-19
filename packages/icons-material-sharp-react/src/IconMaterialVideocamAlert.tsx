import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideocamAlert = (props: IIcon) => {

  return (
    <Icon
      name='VideocamAlert'

      short_name='VideocamAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-480Zm320 320H467q13-18 22.5-38t16.5-42h134v-480H160v131q-22 6-42 15.5T80-551v-249h640v260l160-160v440L720-420v260Zm-480 40q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q83 0 141.5 58.5T440-320q0 83-58.5 141.5T240-120Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160Z"/>
    </Icon>
  );
};

IconMaterialVideocamAlert.displayName = 'OnesyIconMaterialVideocamAlert';

export default IconMaterialVideocamAlert;
