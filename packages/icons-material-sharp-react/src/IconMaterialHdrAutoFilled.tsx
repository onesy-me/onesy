import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrAutoFilled = (props: IIcon) => {

  return (
    <Icon
      name='HdrAutoFilled'

      short_name='HdrAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M276-280h76l40-112h176l40 112h76L520-720h-80L276-280Zm138-176 64-182h4l64 182H414Zm66 376q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialHdrAutoFilled.displayName = 'OnesyIconMaterialHdrAutoFilled';

export default IconMaterialHdrAutoFilled;
