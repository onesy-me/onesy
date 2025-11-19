import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlagCircleFilled = (props: IIcon) => {

  return (
    <Icon
      name='FlagCircleFilled'

      short_name='FlagCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h60v-200h100l40 80h200v-240H600l-40-80H320v440ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialFlagCircleFilled.displayName = 'OnesyIconMaterialFlagCircleFilled';

export default IconMaterialFlagCircleFilled;
