import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboundFilled = (props: IIcon) => {

  return (
    <Icon
      name='OutboundFilled'

      short_name='Outbound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m356-300 204-204v90h80v-226H414v80h89L300-357l56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialOutboundFilled.displayName = 'OnesyIconMaterialOutboundFilled';

export default IconMaterialOutboundFilled;
